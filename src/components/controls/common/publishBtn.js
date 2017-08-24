const html = require('choo/html')
const copy = require('copy-to-clipboard')

function publishButton(state, emit) {
  const error = html`<p class="error">The name is already taken</p>`
  const success = html`<p class="error">The name is already taken</p>`
  let message = null;
  return html`
  <div>
     <a onclick=${publish}>
      [Publish Theme]]
     </a>
     ${message}
    </div>
  `
  function publish() {
    const name = prompt(`what's the name of your theme?`)

    emit('publishTheme', name)
  }
}

module.exports = publishButton
