const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
function saveButton(name, locale, state, emit) {
  return html`
     <a onclick=${saveFile}>
      [Download ${name}.xml]
     </a>
  `
  function saveFile() {
    console.log(`saving ${name} to file`)
    saveToBlob(name, state.fileExports[name])
  }
}

module.exports = saveButton