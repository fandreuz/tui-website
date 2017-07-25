const html = require('choo/html')
const { HEX2RGBA, convertAlpha } = require('utils/colors')

function overlay(label, name, currentValue, file, setValue) {
  console.log('overlay', currentValue)
  return html`<div className="swatch overlay" style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="color" onchange=${returnOverlay} value=${currentValue}/>
        <button className="plus" onchange=${returnOverlay}>+</button>
        <button className="minus" onchange=${returnOverlay}>-</button>
      </div>`
  function returnOverlay(e) {
    const val = e.target.value
    const previousVal = currentValue
    console.log(val, previousVal)
  }
}

module.exports = overlay