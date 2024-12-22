import type { Language } from './translations'

const LANGUAGE_KEY = 'preferred_language'

export function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(LANGUAGE_KEY)
  return (stored as Language) || null
}

export function storeLanguage(language: Language) {
  if (typeof window === 'undefined') return
  localStorage.setItem(LANGUAGE_KEY, language)
}

