const html = require('choo/html')
const preview = require('components/preview/preview')
const copy = require('copy-to-clipboard')

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
        ${actions(files)}
      </div>
    `
}



function actions(files) {
  const copyString = files.xml.theme.replace('theme.xml', '')

  function copyUrl() {
    copy(copyString, {
      message: 'Url Copied'
    })
    alert('Url Copied')
  }
  return html` <div className="actions">
            <div class="desktop-only">
            Download:
              <a download="theme.xml" target="_blank" href="${files.xml.theme}">[Theme]</a>
              <a download="suggestions.xml;" target="_blank" href="${files.xml.suggestions}">[Suggestions]</a>
            </div>
            <div className="mobile-only">
            For Command:
              <a onclick=${copyUrl}>
              [Copy Url]
            </a>
            </div>
          </div>`

}

module.exports = themeListItem