const html = require('choo/html')
const copy = require('copy-to-clipboard')

function saveButton(copyString, state, emit) {
  return html`
     <a onclick=${saveFile}>
      [Paste into T-UI]
     </a>
  `
  function saveFile() {
    copy(copyString, {
      message: 'cmd copied'
    })
    alert('cmd copied')
  }
}

module.exports = saveButton
