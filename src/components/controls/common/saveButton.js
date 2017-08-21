const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
const saveToURL = require('utils/saveUrl')
const { publishTheme } = require('store/firebase')
function saveButton(name, locale, state, emit) {
  const data = state.buildingTheme[name]
  saveToURL(data)
  return html`
     <a onclick=${saveFile}>
      [Download ${name}.xml]
     </a>
  `
  function saveFile() {
    publishTheme(`custom_theme_${state.currentUser.uid}`, 'stagfoo', state.buildingTheme)
  }
}

module.exports = saveButton
