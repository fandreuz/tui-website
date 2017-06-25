const html = require('choo/html')
const helper = require('../utils/helper')

function navbar(state, emit) {
  const rawList = {
    'Google+': '/community',
    'Themes': '/themes',
    'Create a Theme': '/create'
  }
  const renderedList = Object.keys(rawList).map((link) => {
    return html`<li><a href="${rawList[link]}">[${link}]</a></li>`
  })
  return html`
      <ul>
        ${renderedList}
      </ul>
  `
}

module.exports = navbar