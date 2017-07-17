const html = require('choo/html')
const input = require('components/controls/input')
function filterFields(key, state, emit, data) {
  let type
  if (key.indexOf('color') > -1 || key.indexOf('bg') > -1) {
    type = 'color'
  }
  if (key.indexOf('enabled') > -1) {
    type = 'checkbox'
  }
  console.log(type)
  return input({
    label: key,
    name: key,
    type: type,
    currentValue: data[key],
    file: 'suggestions'
  }, state, emit)
}

function themeControls({ theme, suggestions }, state, emit) {

  const themeInputs = Object.keys(theme).map((key) => {
    return input({
      label: key,
      name: key,
      type: 'color',
      currentValue: theme[key],
      file: 'theme'
    }, state, emit)
    // filter out overlay
  })
  const suggestionsInputs = Object.keys(suggestions).map((key) => {
    let type
    if (key.indexOf('color') > -1 || key.indexOf('bg') > -1) {
      type = 'color'
    }
    if (key.indexOf('enabled') > -1) {
      type = 'checkbox'
    }
    console.log(type)
    return input({
      label: key,
      name: key,
      type: type,
      currentValue: suggestions[key],
      file: 'suggestions'
    }, state, emit)
  })

  return html`
      <div className="controls">
        <h1>Theme.xml</h1>
        <div className="pallet">
         ${themeInputs}
        </div>
        <h1>Suggestions.xml</h1>
        <div className="pallet">
          ${suggestionsInputs}
        </div>
      </div>
  `
}

module.exports = themeControls