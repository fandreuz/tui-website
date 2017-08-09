const html = require('choo/html')
const { RGBA2HEX } = require('utils/colors')

function swatch(label, name, currentValue, file, setValue) {
  return html`<div className="swatch"  style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="color" defaultValue="${currentValue}" onchange=${setValue} value="#${RGBA2HEX(currentValue)}"/>
      </div>`
}

module.exports = swatch