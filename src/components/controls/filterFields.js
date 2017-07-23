const inputBinder = require('components/controls/inputBinder')
function filterFields(key, state, emit, data, filename) {
  let type
  if (key.indexOf('color') > -1 || key.indexOf('bg') > -1) {
    type = 'swatch'
  }
  if (key.indexOf('enabled') > -1) {
    type = 'checkbox'
  }
  if (key.indexOf('overlay') > -1) {
    type = 'overlay'
  }
  if (key.indexOf('transparent') > -1 && filename === 'suggestions') {
    type = 'transparent'

  }
  return inputBinder({
    label: key,
    name: key,
    type: type,
    currentValue: data[key],
    file: filename
  }, state, emit)
}
module.exports = filterFields