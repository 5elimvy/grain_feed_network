import { useLang } from '../LanguageContext'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section ueber" id="about">
      <div className="container">
        <div className="ueber__inner">
          <div className="ueber__photo">
            {/* Replace with: <img src={yourPhoto} alt="Your Name" /> */}
            <div className="photo-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="30" r="18" fill="#D4A853" opacity=".3"/>
                <path d="M10 75c0-16.57 13.43-30 30-30s30 13.43 30 30" fill="#D4A853" opacity=".2"/>
              </svg>
              <p>{t('about.photoPlaceholder')}</p>
            </div>
          </div>
          <div className="ueber__text">
            <p className="section__eyebrow">{t('about.eyebrow')}</p>
            <h2 className="section__title">{t('about.title')}</h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <div className="ueber__badges">
              <span className="badge">{t('about.badge1')}</span>
              <span className="badge">{t('about.badge2')}</span>
              <span className="badge">{t('about.badge3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
