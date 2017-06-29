const html = require('choo/html')
const header = require('components/header')
const themeList = require('components/themeList')

function mainView(state, emit) {
  return html`
    <body>
      <div class="container" >
        ${header(state, emit)}
        ${themeList(state, emit)}
      </div>
    </body>
  `
}

module.exports = mainView