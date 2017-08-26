const html = require('choo/html')
const { RGBA2HEX, HEX2RGBA } = require('utils/colors')
function overlay(label, name, currentValue, file, setValue) {
  // Get the opacity for later
  const opacity = parseFloat(currentValue.replace(')', '').split(',')[3])

  return html`<div className="swatch overlay" style="background-color:${currentValue}">
      <label htmlFor="${name}">${label}</label>
      <input type="color" onchange=${returnOverlay} value=${RGBA2HEX(currentValue)}/>
        <button className="plus" onclick=${() => adjustOpacity('PLUS')}>+</button>
        <button className="minus" onclick=${() => adjustOpacity('MINUS')}>-</button>
      </div>`
  function returnOverlay(e) {
    const val = e.target.value // always hex no alpha
    const rgba = HEX2RGBA(val, opacity) // convert hex to rgba
    setValue(rgba)
  }
  function adjustOpacity(type) {
    const n = currentValue.replace(')', '').replace('rgba(', '').split(',')
    if (type === 'PLUS') {
      setValue(`rgba(${n[0]},${n[1]},${n[2]},${Number(opacity + 0.05).toFixed(2)})`)
    } else {
      setValue(`rgba(${n[0]},${n[1]},${n[2]},${Number(opacity - 0.05).toFixed(2)})`)
    }
  }
}

module.exports = overlay