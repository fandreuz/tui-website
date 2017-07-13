const html = require('choo/html')

function swatch(label, type, name, currentValue, file, setValue) {

  return html`<div className="swatch"  style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="${type}" onchange=${setValue} value=${currentValue}/>
      </div>`
}

module.exports = swatch