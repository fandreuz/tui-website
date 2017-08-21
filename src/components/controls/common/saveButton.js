const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
const saveToURL = require('utils/saveUrl')
const { addNewTheme } = require('store/firebase')
function saveButton(name, locale, state, emit) {
  const data = state.buildingTheme[name]
  saveToURL(data)
  return html`
     <a onclick=${saveFile}>
      [Download ${name}.xml]
     </a>
  `
  function saveFile() {
    // saveToBlob(name, state.fileExports[name])
    addNewTheme('test-theme', state.buildingTheme)
    // saveToURL(state.fileExports[name])
  }
}

module.exports = saveButton
