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
      <div className="input_area">
      <i class="input_color">$</i>
      <input class="input_color" type="text"/>
      <i class="material-icons float-right">arrow_back</i>
      </div>
      <div className="bottom-toolbar">
        <i class="material-icons md-18">close</i>
        <i class="material-icons md-18">keyboard_arrow_up</i>
        <i class="material-icons md-18">keyboard_arrow_down</i>
        <i class="material-icons md-18">content_paste</i>
      </div>
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