import { useState } from 'react'
import { useLang } from '../LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 4000)
  }

  return (
    <section className="section kontakt" id="contact">
      <div className="container">
        <div className="kontakt__inner">
          <div className="kontakt__text">
            <p className="section__eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="section__title">{t('contact.title')}</h2>
            <p>{t('contact.sub')}</p>
            <div className="kontakt__details">
              <div className="kontakt__item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <strong>{t('contact.phone')}</strong>
                  <a href="tel:+43000000000">+43 (0) XXX XXX XXX</a>
                </div>
              </div>
              <div className="kontakt__item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <strong>{t('contact.email')}</strong>
                  <a href="mailto:info@grain-feed-network.com">info@grain-feed-network.com</a>
                </div>
              </div>
              <div className="kontakt__item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>{t('contact.location')}</strong>
                  <span>{t('contact.locationVal')}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="kontakt__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="name">{t('form.name')}</label>
                <input type="text" id="name" name="name" placeholder={t('form.namePH')} required />
              </div>
              <div className="form__group">
                <label htmlFor="email">{t('form.email')}</label>
                <input type="email" id="email" name="email" placeholder={t('form.emailPH')} required />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="telefon">{t('form.phone')}</label>
              <input type="tel" id="telefon" name="telefon" placeholder="+43 (0) XXX XXX XXX" />
            </div>
            <div className="form__group">
              <label htmlFor="betreff">{t('form.projectType')}</label>
              <select id="betreff" name="betreff">
                <option value="">{t('form.select')}</option>
                {['opt1','opt2','opt3','opt4','opt5','opt6'].map(k => (
                  <option key={k}>{t(`form.${k}`)}</option>
                ))}
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="nachricht">{t('form.message')}</label>
              <textarea id="nachricht" name="nachricht" rows="5" placeholder={t('form.messagePH')} required />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={submitted}
              style={submitted ? { background: '#2d6a4f', color: '#fff' } : {}}
            >
              {submitted ? t('form.submitDone') : t('form.submit')}
            </button>
            <p className="form__hint">{t('form.hint')}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
