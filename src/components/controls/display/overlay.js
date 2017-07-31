const html = require('choo/html')
function wallpaper(state, emit) {
  let status = state.themeViewSettings.overlay
  return html`<div className="setting overlay" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_overlay: ${status}</label>
      </div>`
  function toggleVisable() {
    if (status === false) {
      emit('updateThemeViewSettings', [ 'overlay', true ])
    } else {
      emit('updateThemeViewSettings', [ 'overlay', false ])
    }
  }
}

module.exports = wallpaper