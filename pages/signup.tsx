import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import AuthModal from '../components/AuthModal'

export default function SignupPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.replace('/dashboard')
  }, [user, router])

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <AuthModal isOpen={true} onClose={() => router.push('/')} />
    </div>
  )
}
