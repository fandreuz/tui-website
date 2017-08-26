const html = require('choo/html')
function storage(state, emit) {
  let status = state.themeViewSettings.storage
  return html`<div className="setting storage" onclick=${toggleVisable}>
      <label onclick=${toggleVisable} >show_storage: ${status}</label>
      <style>
        ${status === false ? '#customTheme .storage_color { display:none; }' : null}
        </style>
      </div>`
  function toggleVisable() {
    if (status === false) {
      emit('updateThemeViewSettings', [ 'storage', true ])
    } else {
      emit('updateThemeViewSettings', [ 'storage', false ])
    }
  }
}

module.exports = storage