import i18next from 'i18next'
import en from '../locales/en.json'
import cs from '../locales/cs.json'

export const replaceElementsWithTranslations = () => {
  const elementOnPage = document.querySelectorAll('[data-t]')
  elementOnPage.forEach(element => {
    const key = element?.dataset?.t
    if (!key) return
    element.innerHTML = i18next.t(key)
  })

  const elementOnPagePh = document.querySelectorAll('[data-t-ph]')

  elementOnPagePh.forEach(element => {
    const key = element?.dataset?.tPh
    if (!key) return
    element.setAttribute('placeholder', i18next.t(key))
  })

  const elementOnPageBtn = document.querySelectorAll('[data-t-btn]')

  elementOnPageBtn.forEach(element => {
    const key = element?.dataset?.tBtn
    if (!key) return
    element.setAttribute('value', i18next.t(key))
  })
}

export const switchLanguage = lang => {
  i18next.changeLanguage(lang).then(() => {
    replaceElementsWithTranslations()
  })
}

i18next.init(
  {
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: en
      },
      cs: {
        translation: cs
      }
    }
  },
  function (err, t) {
    replaceElementsWithTranslations()
  }
)
