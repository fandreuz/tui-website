const html = require('choo/html')

function publishButton(state, emit) {
  function replaceAll(target, search, replacement) {
    return target.split(search).join(replacement)
  }
  const error = html`<p class="error">The name is already taken</p>`
  const success = html`<p class="success">Your theme is published</p>`
  let message = null
  if (state.publishStatus) {
    message = success
  }
  if (state.publishStatus === false) {
    message = error
  }
  return html`
  <div>
     <a onclick=${publish}>
      [Publish Theme]
     </a>
     ${message}
    </div>
  `
  function publish() {



    emit('render')
    const name = prompt(`what's the name of your theme?`)
    emit('publishTheme', replaceAll(name, ' ', '-'))
  }
}

module.exports = publishButton
