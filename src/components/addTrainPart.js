const html = require('choo/html')
const helper = require('../utils/helper')

function addTrain(state, emit, type) {
  let trainNumber = helper.getRandomInt(1, 4)
  const imgUrl = `imgs/${trainNumber}-${type}.png`

  return html`
      <button style="background:none; border:0px;" onclick=${addTrainPart}><img src=${imgUrl} />
      </button>
  `
  function addTrainPart() {
    emit('addTrainPart', imgUrl)
  }
}

module.exports = addTrain