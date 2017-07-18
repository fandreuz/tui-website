const input = require('components/controls/input')
function filterFields(key, state, emit, data, filename) {
  let type
  if (key.indexOf('color') > -1 || key.indexOf('bg') > -1) {
    type = 'color'
  }
  if (key.indexOf('enabled') > -1) {
    type = 'checkbox'
  }
  if (key.indexOf('enabled') > -1) {
    type = 'checkbox'
  }
  console.log('themeControls type', type)
  return input({
    label: key,
    name: key,
    type: type,
    currentValue: data[key],
    file: filename
  }, state, emit)
}
module.exports = filterFields