const html = require('choo/html')
const Fairybread = require('fairybread')

function suggestion(name) {
  return html`<div class="box ${name}_bg_color ${name}_text_color">${name}</div>`
}

function themePreview(files, state, emit) {
  return html`
      <div class="${styles(files.theme, files.suggestions)} theme_preview ">
      <span class="device_color">Mr Sloth</span>
      <span class="ram_color">Free ram: 356mb</span>
      <br>
      <span class="input_color">$ Play store</span>
      <span class="output_color"> ${'-->'} com.android.playstore</span>
      <br>
      <div className="input_area">
      <span class="input_color">$</span>
      <input class="input_color" type="text"/>
      <i class="input_color material-icons float-right">arrow_back</i>
      </div>
      <div className="bottom-toolbar input_color">
        <i class="material-icons md-18">close</i>
        <i class="material-icons md-24">keyboard_arrow_up</i>
        <i class="material-icons md-24">keyboard_arrow_down</i>
        <i class="material-icons md-18">content_paste</i>
      </div>
      <div className="suggestions">
        ${suggestion('file')}
        ${suggestion('apps')}
        ${suggestion('cmd')}
        ${suggestion('song')}
        ${suggestion('alias')}
        ${suggestion('contact')}
      </div>
      </div>
    `
}

function styles(t, s) {
  if (typeof t !== 'undefined' && typeof s !== 'undefined') {
    const sheet = new Fairybread('local')
    Object.keys(t).map((key) => {
      const splitKey = key.split('_')
      if (splitKey[0] !== 'bg') {
        sheet.add(`.${key}`, `color:${t[key]};`)
      } else {
        sheet.add(``, `background-color:${t[key]};`)
      }
    })
    Object.keys(s).map((key) => {
      const splitKey = key.split('_')
      if (splitKey[1] !== 'bg') {
        sheet.add(`.${key}`, `color:${s[key]};`)
      } else {
        sheet.add(`.${key}`, `background:${s[key]};`)
      }
    })

    sheet.render()
    return sheet.id
  }
}

module.exports = themePreview