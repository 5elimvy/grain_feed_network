import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'

function scrollTo(id) {
  const el = id ? document.getElementById(id) : null
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const { lang, switchLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(e, id) {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(id)
  }

  const links = [
    { id: 'services',   label: t('nav.services') },
    { id: 'projects',   label: t('nav.projects') },
    { id: 'advantages', label: t('nav.advantages') },
    { id: 'about',      label: t('nav.about') },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a
          className="nav__logo"
          href="/"
          onClick={e => handleNav(e, null)}
        >
          <span className="nav__logo-mark">GFN</span>
          <span className="nav__logo-text">Grain Feed Network</span>
        </a>

        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={e => handleNav(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav__cta" onClick={e => handleNav(e, 'contact')}>
              {t('nav.contact')}
            </a>
          </li>
          {/* Lang switcher inside mobile menu */}
          <li className="nav__links-lang">
            <div className="lang-switcher">
              <button
                className={`lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => { switchLang('en'); setMenuOpen(false) }}
              >EN</button>
              <span className="lang-divider" />
              <button
                className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
                onClick={() => { switchLang('ru'); setMenuOpen(false) }}
              >RU</button>
            </div>
          </li>
        </ul>

        <div className="nav__right">
          <div className="lang-switcher">
            <button
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => switchLang('en')}
            >EN</button>
            <span className="lang-divider" />
            <button
              className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
              onClick={() => switchLang('ru')}
            >RU</button>
          </div>
          <button
            className="nav__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
