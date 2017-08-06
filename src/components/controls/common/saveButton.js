const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
const saveToURL = require('utils/saveUrl')
function saveButton(name, locale, state, emit) {
  const data = state.buildingTheme[name]
  saveToURL(data)
  return html`
     <a onclick=${saveFile}>
      [Download ${name}.xml]
     </a>
  `
  function saveFile() {
    console.log(`saving ${name} to file`)
    saveToBlob(name, state.fileExports[name])
    // saveToURL(state.fileExports[name])
  }
}

module.exports = saveButton