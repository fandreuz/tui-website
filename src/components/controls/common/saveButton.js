const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
const saveToURL = require('utils/saveUrl')
function saveButton(name, locale, text, feedback, state, emit) {
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
  }
}

module.exports = saveButton