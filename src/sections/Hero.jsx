import { useLang } from '../LanguageContext'
import heroImg from '../assets/hero.png'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { t } = useLang()
  const hasImage = false // set to true once you add your own photo to src/assets/

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
        <h1 className="hero__title">
          {t('hero.title1')}<br />
          <span className="hero__accent">{t('hero.title2')}</span>
        </h1>
        <p className="hero__sub">{t('hero.sub')}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary" onClick={e => { e.preventDefault(); scrollTo('contact') }}>{t('hero.cta1')}</a>
          <a href="#projects" className="btn btn--outline" onClick={e => { e.preventDefault(); scrollTo('projects') }}>{t('hero.cta2')}</a>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <span className="stat__value">150+</span>
            <span className="stat__label">{t('hero.stat1')}</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__value">25 {t('hero.years')}</span>
            <span className="stat__label">{t('hero.stat2')}</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__value">100%</span>
            <span className="stat__label">{t('hero.stat3')}</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__image-wrap">
          {hasImage ? (
            <img src={heroImg} alt="Grain silo installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div className="hero__image-placeholder">
              <SiloIcon />
              <p>{t('hero.imgPlaceholder')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function SiloIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" fill="none">
      <rect x="10" y="20" width="44" height="50" rx="4" fill="#D4A853" opacity=".25"/>
      <ellipse cx="32" cy="20" rx="22" ry="8" fill="#D4A853" opacity=".4"/>
      <rect x="24" y="55" width="6" height="15" rx="2" fill="#D4A853" opacity=".5"/>
      <rect x="34" y="55" width="6" height="15" rx="2" fill="#D4A853" opacity=".5"/>
      <rect x="26" y="35" width="12" height="14" rx="2" fill="#D4A853" opacity=".6"/>
    </svg>
  )
}
