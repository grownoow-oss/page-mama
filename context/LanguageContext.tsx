import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../locales/translations';

type Language = 'en' | 'bn';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('bn');

    // Optional: Persist language preference
    useEffect(() => {
        setLanguage('bn');
        localStorage.setItem('language', 'bn');
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage('bn');
        localStorage.setItem('language', 'bn');
    };

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
