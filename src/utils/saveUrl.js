const { RGBA2HEX } = require('utils/colors')
const copy = require('copy-to-clipboard')
function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}
function createUrl(data) {
  let props = Object.keys(data).map((key) => {
    const val = data[key]
    let cleanColor
    if (val.indexOf('rgb') !== 0) {
      cleanColor = data[key]
    } else {
      const dataKeyPart = data[key].split(',')[3] ? data[key].split(',')[3] : ''
      const hexAlpha = dataKeyPart.replace(')', '')
      cleanColor = '#' + RGBA2HEX(data[key], hexAlpha)
    }
    return `${key}=${cleanColor}/`
  })
  props = replaceAll(props.toString(), ',', '')
  return props
}

function saveToURL(data) {
  console.log(data['suggestions'])
  const themeString = 'theme/' + createUrl(data['theme'])
  const suggestionString = 'suggestions/' + createUrl(data['suggestions'])

  copy(themeString + suggestionString, {
    debug: true,
    message: 'Copied to clipboard'
  })
}

module.exports = saveToURL