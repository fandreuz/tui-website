const html = require('choo/html')
const saveToBlob = require('utils/saveBlob')
function saveButton(name, locale, state, emit) {
// get from the state
  console.log(state.fileExports)

  return html`
     <a onclick=${saveFile}>
      [Download ${name}.xml]
      <div id="${name}_save"></div>
     </a>
  `
  function saveFile() {
    console.log(`saving ${name} to file`)
    saveToBlob(name, state.fileExports[name])
  }
}

module.exports = saveButton