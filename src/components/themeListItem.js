const html = require('choo/html')
const preview = require('components/preview/preview')
const copy = require('copy-to-clipboard')

function themeListItem(self, state, emit) {
  const themeName = self[0]
  const themeObject = self[1]

  const dwns = themeObject['downloads'] ? themeObject['downloads'] : 0;
  var pow = 0;
  while (Math.pow(2,pow) < dwns) {
    pow++;
  }
  if(pow > 0) pow--;

  const author = themeObject['author']

  const files = {
    'theme': themeObject['files']['THEME'],
    'suggestions': themeObject['files']['SUGGESTIONS']
  }
  return html`
      <div class="theme_item">
        ${preview(files, state, emit)}
        <h1><p align="left">${themeName}<span style="float:right">2<sup>${pow}</sup></span></p></h1>
        <h2><p align="right" style="color:white">By: ${author}</p></h2>
        ${actions(files, themeName)}
      </div>
    `
}

function actions(files, name) {
  const copyString = `theme -apply ${name}`

  function copyUrl() {
    copy(copyString, {
      message: 'cmd copied'
    })
    alert('cmd copied')
  }
  return html` <div className="actions">
            <div class="desktop-only">
             <div className="themeString">
              <code><pre>$ ${copyString}</pre></code>
             </div>
            </div>
            <div className="mobile-only">
            <div onclick=${copyUrl} className="themeString">
              <code><pre>$ ${copyString}</pre></code>
            </div>
            </div>
          </div>`

}

module.exports = themeListItem