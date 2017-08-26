const html = require('choo/html')
function transparent(label, name, currentValue, file, setValue) {
  return html`<div className="checkbox" onclick=${setCustomValue}>
      <label>${label} ${currentValue}</label>
       <style>
        ${currentValue === true ? '#customTheme .suggestions .box { background:transparent; background-color:transparent; }' : null}
      </style>
      </div>`
  function setCustomValue() {
    if (currentValue !== true) {
      setValue(true)
    } else {
      setValue(false)
    }
  }
}

module.exports = transparent