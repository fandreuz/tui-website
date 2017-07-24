const html = require('choo/html')
const filterFields = require('components/controls/filterFields')

function previewControls({ theme, suggestions }, state, emit) {
  console.log(suggestions)
  const themeInputs = Object.keys(theme).map((key) => {
    return filterFields(key, state, emit, theme, 'theme')
    // filter out overlay
  })
  const suggestionsInputs = Object.keys(suggestions).map((key) => {
    return filterFields(key, state, emit, suggestions, 'suggestions')
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

module.exports = previewControls