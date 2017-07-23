const html = require('choo/html')
const { hexToRGB } = require('utils/colors')
function overlay(label, name, currentValue, file, setValue) {

  return html`<div className="swatch overlay" style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="color" onchange=${setValue} value=${currentValue}/>
        <button className="plus" onchange=${setValue}>+</button>
        <button className="minus" onchange=${setValue}>-</button>
      </div>`
}

module.exports = overlay