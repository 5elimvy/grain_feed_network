import { useLang } from '../LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__logo-mark">GFN</span>
          <span>Grain Feed Network</span>
        </div>
        <p className="footer__copy">{t('footer.copy')}</p>
        <div className="footer__links">
          <a href="#">{t('footer.imprint')}</a>
          <a href="#">{t('footer.privacy')}</a>
        </div>
      </div>
    </footer>
  )
}
