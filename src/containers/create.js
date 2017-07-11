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
      <style>
        @media only screen and (max-width: 500px) {
          .two-thirds.third { width:100%; }

        }
      </style>
    </body>
  `
}

module.exports = createView