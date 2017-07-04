const html = require('choo/html')
const header = require('components/header')
const themeBuilder = require('components/themeBuilder')
function createView(state, emit) {
  return html`
    <body>
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <div class="container" >
        ${header(state, emit)}
        ${themeBuilder(state, emit)}
      </div>
    </body>
  `
}

module.exports = createView