const html = require('choo/html')
function checkbox(label, name, currentValue, file, setValue) {
  return html`<div className="checkbox">
      <label htmlFor="${name}">${label}</label>
      <input type="checkbox" onchange=${setValue} value=${currentValue}/>
      </div>`
}

module.exports = checkbox