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
        <span>${self[0]}</span>
      </div>
    `
}

module.exports = themeListItem