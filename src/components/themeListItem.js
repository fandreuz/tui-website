const html = require('choo/html')
const themePreview = require('components/themePreview')

function themeListItem(self, state, emit) {
  console.log(self[0])
  console.log(self[1])

  return html`
     <div class="theme_item">
      <span>${self[0]}</span>
     </div>
  `
}

module.exports = themeListItem