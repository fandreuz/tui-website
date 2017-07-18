const html = require('choo/html')
function time(state, emit) {
  let status = state.themeViewSettings.time
  return html`<div className="setting time" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_time: ${status}</label>
      <style>
        ${status === false ? '#customTheme .time_color { display:none; }' : null}
        </style>
      </div>`
  function toggleVisable() {
    if (status === false) {
      emit('updateThemeViewSettings', [ 'time', true ])
    } else {
      emit('updateThemeViewSettings', [ 'time', false ])
    }
  }
}

module.exports = time