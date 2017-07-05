const html = require('choo/html')
const Fairybread = require('fairybread')

function navbar(state, emit) {
  const rawList = {
    'Google+': 'https://plus.google.com/communities/103936578623101446195',
    'Themes': '/',
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
        padding-bottom:4em;
      `)
  sheet.add('li', `
        display:inline-block;
        padding:0 1em;
      `)
  sheet.add('a:hover', `
        color:white;
      `)
  sheet.render()
  return sheet.id
}

module.exports = navbar