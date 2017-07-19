const html = require('choo/html')
const themeControls = require('components/controls/themeControls')
const themePreview = require('components/themePreview')
const saveButton = require('components/controls/common/saveButton')
const battery = require('components/controls/display/battery')
const showToggle = require('components/controls/display/showToggle')

const sv = require('../../style/vars')

const Fairybread = require('fairybread')

function themeBuilder(state, emit) {
  const defaults = state.buildingTheme
  if (defaults !== null) {
    return html`
      <div className=${styles()}>
      <div className="theme_details">
      <div className="theme_settings half">
        ${battery(state, emit)}
        ${showToggle('time', 'time_color', state, emit)}
        ${showToggle('ram', 'ram_color', state, emit)}
        ${showToggle('storage', 'storage_color', state, emit)}
        ${showToggle('device', 'device_color', state, emit)}
      </div>
      <div id="customTheme" className="half">
            ${themePreview(defaults, state, emit)}
          </div>
      </div>
          <div className="two-thirds third">
            ${themeControls(defaults, state, emit)}
          </div>
          <div id="downloads">
            ${saveButton('theme', 'buildingTheme', state, emit)}
            ${saveButton('suggestions', 'buildingSuggestion', state, emit)}
          </div>
      </div>
    `
  }
}
function styles() {
  const sheet = new Fairybread('local')
  sheet.add('', `
        display:inline-block;
        text-align:center;
        padding-bottom:4em;
        max-width:100%;
      `)
  sheet.add('.theme_preview', `
        max-width:300px;
        margin: 0 auto;
      `)
  sheet.add('.theme_settings', `
        float:left;
        padding-bottom:1em;
      `)
  sheet.add('li', `
        display:inline-block;
        padding:0 1em;
      `)
  sheet.add('.pallet', `
        white-space: nowrap;
        overflow-x: auto;
      `)
  // Theme Builder Form
  const formStyle = `padding: 1em;
      position: relative;
      display: inline-block;
      max-width: 175px;
      min-height: 40px;
      border: 1px solid;
      margin: 0px 5px 5px 0px;
      width: 27vw;`
  const formLabelStyle = `
        padding:1em;
        position:absolute;
        background:#000;
        bottom:0px;
        left:0px;
  `
  sheet.add('.swatch', formStyle)
  sheet.add('.swatch label', formLabelStyle)
  sheet.add('.swatch input[type="color"]', `
          position:absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          opacity:0;
      `)
  sheet.add('.checkbox', formStyle)
  sheet.add('.checkbox label', formLabelStyle)

  sheet.add('.setting', `
    background:${sv.textColor};
    color:#000;
    display:inline-block;
    padding:1em;
    margin: 0.5em;
    clear:both;
    float:right;
  `)
  sheet.add('#downloads', `font-size:2em; padding:1em 0em;`)
  sheet.add('#downloads a', `clear:both; width:100%; display:block; margin:1em;`)

  sheet.render()
  return sheet.id
}

module.exports = themeBuilder