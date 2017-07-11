const html = require('choo/html')
const input = require('components/controls/input')

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
    if (key.indexOf('color') > -1 || key.indexOf('bg') > -1) {
      return input({
        label: key,
        name: key,
        type: 'color',
        currentValue: suggestions[key],
        file: 'suggestions'
      }, state, emit)
    } else {
      // other inputs
    }
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