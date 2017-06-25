const html = require('choo/html')
const navbar = require('../components/navbar')

function header(state, emit) {
  return html`
      <header>
      <h1>t-ui launcher</h1>
      <h2>==================</h2>
       ${navbar(state, emit)}
      </header>
  `
}

module.exports = header