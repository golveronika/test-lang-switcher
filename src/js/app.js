// eslint-disable no-console no-unused-vars
// import audio from '@/audio/click.mp3'
// import Cursor from './libs/Cursor'
import greeting from './libs/greeting'

import { switchLanguage } from './libs/translations'

document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('language-toggle')
  langSwitcher.addEventListener('change', e => {
    const lang = e.target.checked ? 'cs' : 'en'
    switchLanguage(lang)
  })
})

window.addEventListener('load', () => {
  greeting({ name: 'Veronika', email: 'veronika@me.com' })
})
