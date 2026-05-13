import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('gfn-lang') || 'en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang]?.['meta.title'] ?? 'Grain Feed Network'
  }, [lang])

  function switchLang(newLang) {
    setLang(newLang)
    localStorage.setItem('gfn-lang', newLang)
  }

  function t(key) {
    return translations[lang]?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
