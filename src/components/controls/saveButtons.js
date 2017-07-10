const html = require('choo/html')
const input = require('components/controls/input')

function saveButton({ name }, state, emit) {
// get from the state
  return html`
      <div className="controls">
        <h1>Theme.xml</h1>
        ${themeInputs}
        <h1>Suggestions.xml</h1>
        ${suggestionsInputs}
      </div>
  `
}

module.exports = themeControls