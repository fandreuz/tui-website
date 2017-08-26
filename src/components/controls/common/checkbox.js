const html = require('choo/html')
function checkbox(label, name, currentValue, file, setValue) {
  return html`<div className="checkbox" onclick=${setCustomValue}>
      <label htmlFor="${name}">${label} ${currentValue}</label>
      <style>
       ${style(currentValue, file, name)}
      </style>
      </div>`
  function setCustomValue() {
    if (currentValue === false) {
      setValue(true)
    } else {
      setValue(false)
    }
  }
}
function style(currentValue, file, name) {
  if (currentValue === false) {
    const key = `${file}_${name}`
    switch (key) {
      case 'suggestions_enabled':
        return '#customTheme .suggestions { display:none; }'
      default:
        return ''
    }
  } else {
    return null
  }
}

module.exports = checkbox