const html = require('choo/html')
function ram(state, emit) {
  let status = state.themeViewSettings.ram
  return html`<div className="setting ram" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_ram: ${status}</label>
      <style>
        ${status === false ? '#customTheme .ram_color { display:none; }' : null}
        </style>
      </div>`
  function toggleVisable() {
    if (status === false) {
      emit('updateThemeViewSettings', [ 'ram', true ])
    } else {
      emit('updateThemeViewSettings', [ 'ram', false ])
    }
  }
}

module.exports = ram