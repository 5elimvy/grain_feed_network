import { useEffect, useRef, Fragment } from 'react'
import { useLang } from '../LanguageContext'

const advantages = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
const processSteps = ['s1', 's2', 's3', 's4']

export default function Benefits() {
  const { t } = useLang()
  const refs = useRef([])

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
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setRef = i => el => { refs.current[i] = el }

  return (
    <>
      {/* ADVANTAGES */}
      <section className="section vorteile" id="advantages">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">{t('adv.eyebrow')}</p>
            <h2 className="section__title">{t('adv.title')}</h2>
          </div>
          <div className="vorteile__grid">
            {advantages.map((key, i) => (
              <div
                key={key}
                className="vorteil"
                ref={setRef(i)}
                style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s ease, transform .5s ease' }}
              >
                <div className="vorteil__num">0{i + 1}</div>
                <div>
                  <h3>{t(`adv.${key}.title`)}</h3>
                  <p>{t(`adv.${key}.text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section prozess">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">{t('process.eyebrow')}</p>
            <h2 className="section__title">{t('process.title')}</h2>
          </div>
          <div className="prozess__steps">
            {processSteps.map((key, i) => (
              <Fragment key={key}>
                <div
                  className="step"
                  ref={setRef(6 + i)}
                  style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s ease, transform .5s ease' }}
                >
                  <div className="step__num">{i + 1}</div>
                  <h3>{t(`process.${key}.title`)}</h3>
                  <p>{t(`process.${key}.text`)}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="step__arrow">→</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
