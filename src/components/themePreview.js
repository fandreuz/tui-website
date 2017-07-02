const html = require('choo/html')
const Fairybread = require('fairybread')

function themePreview(files, state, emit) {
  return html`
      <div class="${styles()} theme_preview bg_color">
      <span class="device_color">Mr Sloth</span>
      <span class="ram_color">Free ram: 356mb</span>
      <br>
      <span class="input_color">$ Play store</span>
      <span class="output_color"> ${'-->'} com.android.playstore</span>
      <br>
      </div>
    `
  function styles() {
    const sheet = new Fairybread('local')
    sheet.add('', ``)

    sheet.render()
    return sheet.id
  }
}

module.exports = themePreview