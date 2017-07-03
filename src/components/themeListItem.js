const html = require('choo/html')
const themePreview = require('components/themePreview')

function themeListItem(self, state, emit) {
  const files = {
    'theme': self[1].files['THEME'],
    'suggestions': self[1].files['SUGGESTIONS'],
    'xml': {
      'theme': self[1].theme,
      'suggestions': self[1].suggestions
    }
  }
  return html`
      <div class="theme_item">
        ${themePreview(files, state, emit)}
        <h1>${self[0]}</h1>
        <div className="actions">
          Download:
          <a href="${files.xml.theme}">[Theme]</a>
          <a href="${files.xml.suggestions}">[Suggestions]</a>
        </div>
      </div>
    `
}

module.exports = themeListItem