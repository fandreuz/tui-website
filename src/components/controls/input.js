const html = require('choo/html')
const swatch = require('components/controls/swatch')
const checkbox = require('components/controls/checkbox')

function input({label, type, name, currentValue, file}, state, emit) {
  console.log('type', type)
  switch (type) {
    case 'color':
      return swatch(label, name, currentValue, file, setValue)
    case 'checkbox':
      return checkbox(label, name, currentValue, file, setValue)
    default:
      return html`
      <div className="row">
      <label htmlFor="${name}">${label}</label>
      <input type="${type}"/>
      </div>`
  }

  function setValue(e) {
    emit('updateThemeValue', { 'value': e.target.value, 'name': name, 'file': file })
  }
}

module.exports = input