const html = require('choo/html')
const filterFields = require('components/controls/filterFields')

function themeControls({ theme, suggestions }, state, emit) {

  const themeInputs = Object.keys(theme).map((key) => {
    return filterFields(key, state, emit, theme, 'theme')
    // filter out overlay
  })
  const suggestionsInputs = Object.keys(suggestions).map((key) => {
    return filterFields(key, state, emit, theme, 'suggestions')
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