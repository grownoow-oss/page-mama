import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useRouter } from 'next/router';

// ── Types ──────────────────────────────────────────────────────────────────
export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  plan: 'Quick Check' | 'Smart Growth' | 'Pro' | null;
  createdAt?: any;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUserPlan: (plan: UserProfile['plan']) => Promise<void>;
}

// ── Context ────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Provider ───────────────────────────────────────────────────────────────
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Initialize provider only when needed
  const getGoogleProvider = () => new GoogleAuthProvider();

  // Fetch or create user profile in Firestore
  const fetchOrCreateProfile = async (firebaseUser: User) => {
    const ref = doc(db, 'users', firebaseUser.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setUserProfile(snap.data() as UserProfile);
    } else {
      const profile: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        plan: null,
        createdAt: serverTimestamp(),
      };
      await setDoc(ref, profile);
      setUserProfile(profile);
    }
  };

  // Listen to Firebase auth state changes
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchOrCreateProfile(firebaseUser);
        // Sync to localStorage for backward compat
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setUserProfile(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userPlan');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ── Auth Methods ───────────────────────────────────────────────────────
  const loginWithEmail = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await fetchOrCreateProfile(cred.user);
  };

  const signupWithEmail = async (name: string, email: string, password: string, phone?: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });

    const profile: UserProfile = {
      uid: cred.user.uid,
      email,
      displayName: name,
      photoURL: null,
      plan: null,
      createdAt: serverTimestamp(),
      ...(phone ? { phone } : {}),
    } as any;

    await setDoc(doc(db, 'users', cred.user.uid), profile);
    setUserProfile(profile);
  };

  const loginWithGoogle = async () => {
    const provider = getGoogleProvider();
    const result = await signInWithPopup(auth, provider);
    await fetchOrCreateProfile(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const updateUserPlan = async (plan: UserProfile['plan']) => {
    if (!user) return;
    const ref = doc(db, 'users', user.uid);
    await setDoc(ref, { plan }, { merge: true });
    setUserProfile((prev) => (prev ? { ...prev, plan } : null));
    if (plan) localStorage.setItem('userPlan', plan);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        loginWithEmail,
        signupWithEmail,
        loginWithGoogle,
        logout,
        updateUserPlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ── Hook ───────────────────────────────────────────────────────────────────
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
