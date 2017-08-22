const html = require('choo/html')
const Fairybread = require('fairybread')

function navbar(state, emit) {
  const rawList = {
    'New Theme': '/create',
    'Themes': '/',
    'Google+': 'https://plus.google.com/communities/103936578623101446195',
    'Twitter': 'https://twitter.com/tui_launcher'

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

  sheet.add('a:hover', `
        color:white;
      `)
  if (window.innerWidth > 500) {
    sheet.add('li', `
    display:inline-block;
    padding:0 1em;
   `)
  } else {
    sheet.add('li', `
    display:inline-block;
    padding:1em 1em;
   `)
  }
  sheet.render()
  return sheet.id
}

module.exports = navbar
