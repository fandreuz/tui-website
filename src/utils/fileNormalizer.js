function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}

function themeXML(data) {
  let props = Object.keys(data).map((key) => {
    return `<${key} value="${data[key]}"/>`
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