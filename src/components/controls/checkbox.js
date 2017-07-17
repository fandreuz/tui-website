const html = require('choo/html')
function checkbox({ label, name, currentValue, file }, state, emit) {
  return html`<div className="">
      <label htmlFor="${name}">${label}</label>
      <input type="checkbox" onchange=${setValue} value=${currentValue}/>
      </div>`

  function setValue(e) {
    emit('updateThemeValue', { 'value': e.target.value, 'name': name, 'file': file })
  }
}

module.exports = checkbox