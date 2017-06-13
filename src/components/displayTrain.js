const html = require('choo/html')
function displayTrain(state, emit) {
  const train = state.train.map((data, index) => {
    return html`<img src="${data}" />`
  })

  return html`
      <div style="min-height:120px">${train}</div>
  `
}

module.exports = displayTrain