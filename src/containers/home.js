const html = require('choo/html')
const addTrainPart = require('components/addTrainPart')
const displayTrain = require('components/displayTrain')

function mainView(state, emit) {
  return html`
    <body>
      <h1>Build a train</h1>
      ${displayTrain(state, emit)}
      ${addTrainPart(state, emit, 'head')}
      ${addTrainPart(state, emit, 'car')}
    </body>
  `
}

module.exports = mainView