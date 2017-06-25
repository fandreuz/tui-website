const html = require('choo/html')
const displayTrain = require('components/displayTrain')
const header = require('components/header')

function mainView(state, emit) {
  return html`
    <body>
      <div class="container" >
        ${header(state, emit)}
      </div>
      // Theme Builder goes here
    </body>
  `
}

module.exports = mainView