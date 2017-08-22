const swatch = require('components/controls/common/swatch')
const overlay = require('components/controls/theme/overlay')
const checkbox = require('components/controls/common/checkbox')
const transparent = require('components/controls/suggestions/transparent')

function input({label, type, name, currentValue, file}, state, emit) {
  switch (type) {
    case 'checkbox':
      return checkbox(label, name, currentValue, file, setCustomValue)
    case 'transparent':
      return transparent(label, name, currentValue, file, setCustomValue)
    case 'overlay':
      return overlay(label, name, currentValue, file, setCustomValue)
    default:
      return swatch(label, name, currentValue, file, setValue)

  }

  function setValue(e) {
    emit('updateThemeValue', { 'value': e.target.value, 'name': name, 'file': file })
  }
  function setCustomValue(value) {
    emit('updateThemeValue', { 'value': value, 'name': name, 'file': file })
  }
}

module.exports = input
