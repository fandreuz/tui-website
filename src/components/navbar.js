const html = require('choo/html')
const Fairybread = require('fairybread')
const sv = require('../../style/vars')

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
      <ul class="${styles()}">
        ${renderedList}
      </ul>
  `
}

function styles() {
  const sheet = new Fairybread('local')
  sheet.add('', `
        display:inline-block;
        text-align:center;
      `)
  sheet.add('li', `
        display:inline-block;
        padding:0 1em;
      `)
  sheet.render()
  return sheet.id
}

module.exports = navbar