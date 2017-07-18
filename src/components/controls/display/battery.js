const html = require('choo/html')
function battery(state, emit) {
  let status = state.themeViewSettings.battery
  let output = ``
  return html`<div className="setting battery" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_battery: ${status}</label>
      <style>
        ${status === false ? '#customTheme .battery_color_high { display:none; }' : null}
        ${status === false ? '#customTheme .battery_color_low { display:none; }' : null}
        ${status === false ? '#customTheme .battery_color_medium { display:none; }' : null}

        </style>
      </div>`
  function toggleVisable() {
    if (status === false) {
      // status = true
      emit('updateThemeViewSettings', [ 'battery', true ])
      // output = ``
    } else {
      // status = false
      emit('updateThemeViewSettings', [ 'battery', false ])
    }
  }
}

module.exports = battery