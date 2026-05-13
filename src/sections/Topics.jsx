import { useEffect, useRef } from 'react'
import { useLang } from '../LanguageContext'

const serviceCards = [
  {
    key: 'card1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    key: 'card2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    key: 'card3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    key: 'card4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
      </svg>
    ),
  },
  {
    key: 'card5',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    key: 'card6',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const projects = [
  { key: 'p1', colorClass: 'project__img--1', tagKey: 'projects.tag1' },
  { key: 'p2', colorClass: 'project__img--2', tagKey: 'projects.tag2' },
  { key: 'p3', colorClass: 'project__img--3', tagKey: 'projects.tag3' },
]

export default function Topics() {
  const { t } = useLang()
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setRef = i => el => { cardRefs.current[i] = el }

  return (
    <>
      {/* SERVICES */}
      <section className="section leistungen" id="services">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">{t('services.eyebrow')}</p>
            <h2 className="section__title">{t('services.title')}</h2>
            <p className="section__sub">{t('services.sub')}</p>
          </div>
          <div className="cards">
            {serviceCards.map((card, i) => (
              <div
                key={card.key}
                className="card"
                ref={setRef(i)}
                style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s ease, transform .5s ease' }}
              >
                <div className="card__icon">{card.icon}</div>
                <h3 className="card__title">{t(`services.${card.key}.title`)}</h3>
                <p className="card__text">{t(`services.${card.key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projekte" id="projects">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">{t('projects.eyebrow')}</p>
            <h2 className="section__title">{t('projects.title')}</h2>
            <p className="section__sub">{t('projects.sub')}</p>
          </div>
          <div className="projects">
            {projects.map((proj, i) => (
              <div
                key={proj.key}
                className="project"
                ref={setRef(6 + i)}
                style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s ease, transform .5s ease' }}
              >
                <div className={`project__img ${proj.colorClass}`}>
                  <span className="project__tag">{t(proj.tagKey)}</span>
                </div>
                <div className="project__info">
                  <h3>{t(`projects.${proj.key}.title`)}</h3>
                  <p>{t(`projects.${proj.key}.desc`)}</p>
                  <ul className="project__meta">
                    <li><strong>{t('projects.capacity')}</strong> {t(`projects.${proj.key}.cap`)}</li>
                    <li><strong>{t('projects.buildtime')}</strong> {t(`projects.${proj.key}.time`)}</li>
                    <li><strong>{t('projects.product')}</strong> {t(`projects.${proj.key}.prod`)}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
