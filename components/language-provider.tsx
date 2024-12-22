'use client'

import { useState, useEffect, ReactNode } from 'react'
import { LanguageContext } from '@/contexts/language-context'
import type { Language } from '@/lib/translations'
import { getStoredLanguage, storeLanguage } from '@/lib/language-storage'

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage?: Language
}

export function LanguageProvider({ 
  children, 
  initialLanguage = 'en' 
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = getStoredLanguage()
    if (stored) {
      setLanguage(stored)
    }
    setIsLoading(false)
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    storeLanguage(newLanguage)
  }

  if (isLoading) {
    return null 
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

