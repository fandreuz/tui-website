const { RGBA2HEX, HEX2RGBA, convertAlpha } = require('utils/colors')

function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}

function themeXML(data) {
  let props = Object.keys(data).map((key) => {
    let cleanColor
    if (data[key].indexOf('#') > -1) {
      cleanColor = data[key]
    } else {
      const hexAlpha = data[key].split(',')[3].replace(')', '')
      cleanColor = RGBA2HEX(data[key], hexAlpha)
    }
    return `<${key} value="${cleanColor}"/>`
  })
  props = replaceAll(props.toString(), ',', '\n')
  return `
  <?xml version="1.0" encoding="UTF-8"?>
    <THEME>
      ${props}
    </THEME>
  `
}
function suggestionXML(data) {
  let props = Object.keys(data).map((key) => {
    return `<${key} value="${data[key]}"/>`
  })
  props = replaceAll(props.toString(), ',', '\n')
  return `
  <?xml version="1.0" encoding="UTF-8"?>
    <SUGGESTION>
      ${props}
    </SUGGESTION>
  `
}

module.exports = { themeXML, suggestionXML }
