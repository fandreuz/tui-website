const html = require('choo/html')
const styles = require('components/preview/styles')
function suggestion(name) {
  return html`<div class="box default_text_color default_bg_color ${name}_bg_color ${name}_text_color">${name}</div>`
}

function themePreview({theme, suggestions}, state, emit) {
  const stylesRender = styles(theme, suggestions, state.themeViewSettings)
  return html`
        <div class="${stylesRender} theme_preview">
        <div class="bg_image"></div>
        <div class="overlay_color"></div>
        <div className="upperLayer">
          <span class="device_color">Mr Sloth : user</span>
          <span class="ram_color">Available RAM: 18.49%</span>
          <span class="battery_color_high">Battery: 35.43%</span>
          <span class="time_color">07/19/17 06.11</span>
          <span class="storage_color">Internal Storage: 10.04%</span>
          <br>
          <span class="input_color">$ Play store</span>
          <span class="output_color"> ${'-->'} com.android.playstore</span>
          <br>
          <div className="input_area">
          <span class="input_color">$</span>
          <input class="input_color" type="text"/>
          <i class="input_color enter_color material-icons float-right">arrow_back</i>
          </div>
          <div className="bottom-toolbar input_color toolbar_color toolbar_bg">
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
        </div>
      `
}

module.exports = themePreview
