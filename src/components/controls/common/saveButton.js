const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
const saveToURL = require('utils/saveUrl')
function saveButton(name, locale, text, feedback, state, emit) {
const { publishTheme } = require('store/firebase')
  return html`
     <a onclick=${saveFile}>
      ${text}
     </a>
  `
  function saveFile() {
    if (locale === 'BOTH') {
      saveToURL(state['buildingTheme'])
      window.alert('Text copied')
    } else {
      saveToBlob(name, state.fileExports[name])
    }
    publishTheme(`custom_theme_${state.currentUser.uid}`, 'stagfoo', state.buildingTheme)
  }
}

module.exports = saveButton
