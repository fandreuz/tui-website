const html = require('choo/html')

function swatch(label, name, currentValue, file, setValue) {

  return html`<div className="swatch"  style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="color" onchange=${setValue} value=${currentValue}/>
      </div>`
}

module.exports = swatch