const html = require('choo/html')
const preview = require('components/preview/preview')
const copy = require('copy-to-clipboard')

function themeListItem(self, state, emit) {
  const themeName = self[0]
  const themeObject = self[1]
  const files = {
    'theme': themeObject['files']['THEME'],
    'suggestions': themeObject['files']['SUGGESTIONS']
  }
  return html`
      <div class="theme_item">
        ${preview(files, state, emit)}
        <h1>${themeName}</h1>
        ${actions(files, themeName)}
      </div>
    `
}

function actions(files, name) {
  const copyString = `theme -apply ${name}`

  function copyUrl() {
    copy(copyString, {
      message: 'Command Copied'
    })
    alert('Command Copied')
  }
  return html` <div className="actions">
            <div class="desktop-only">
             <div className="themeString">
              <code><pre>$ ${copyString}</pre></code>
             </div>
            </div>
            <div className="mobile-only">
            <div onclick=${copyUrl} className="themeString">
              <code><pre>${copyString}</pre></code>
            </div>
            </div>
          </div>`

}

module.exports = themeListItem
