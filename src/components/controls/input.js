const html = require('choo/html')

function input({ label, type, name, currentValue, file }, state, emit) {
  if (type === 'color') {
    return html`<div className="swatch"  style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="${type}" onchange=${setValue} value=${currentValue}/>
    </div>`
  }
  return html`
      <div className="row">
      <label htmlFor="${name}">${label}</label>
      <input type="${type}"/>
      </div>
  `
  function setValue(e) {
    emit('updateThemeValue', { 'value': e.target.value, 'name': name, 'file': file })
  }
}

module.exports = input