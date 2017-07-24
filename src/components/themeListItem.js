const html = require('choo/html')
const preview = require('components/preview/preview')
const isMobile = false // create a check function

function themeListItem(self, state, emit) {
  const files = {
    'theme': self[1].files['THEME'], // json vales
    'suggestions': self[1].files['SUGGESTIONS'], // json vales
    'xml': {
      'theme': self[1].theme,
      'suggestions': self[1].suggestions
    }
  }
  return html`
      <div class="theme_item">
        ${preview(files, state, emit)}
        <h1>${self[0]}</h1>
        ${actions(isMobile, files)}
      </div>
    `
}
function actions(isMobile, files) {
  if (!isMobile) {
    return html` <div className="actions">
            Download:
            <a download="theme.xml" target="_blank" href="${files.xml.theme}">[Theme]</a>
            <a download="suggestions.xml;" target="_blank" href="${files.xml.suggestions}">[Suggestions]</a>
          </div>`
  } else {
    return html` <div className="actions">
      Open in Tui:
      <a download="theme.xml" target="_blank" href="${files.xml.theme}">[Theme]</a>
      <a download="suggestions.xml;" target="_blank" href="${files.xml.suggestions}">[Suggestions]</a>
      </div>`
  }
}

module.exports = themeListItem