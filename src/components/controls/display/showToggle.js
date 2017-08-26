const html = require('choo/html')
function showToggle(type, className, state, emit) {
  let status = state.themeViewSettings[type]
  return html`<div className="setting ${type}" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_${type}: ${status}</label>
      <style>
        ${status === false ? `#customTheme .${className} { display:none; }` : null}
        </style>
      </div>`
  function toggleVisable() {
    if (status === false) {
      emit('updateThemeViewSettings', [ type, true ])
    } else {
      emit('updateThemeViewSettings', [ type, false ])
    }
  }
}

module.exports = showToggle