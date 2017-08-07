const { RGBA2HEX, HEX2RGBA, convertAlpha } = require('utils/colors')

function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}

function saveToURL(data) {
  // let props = Object.keys(data).map((key) => {
  //   let cleanColor
  //   if (data[key].indexOf('#') > -1) {
  //     cleanColor = data[key]
  //   } else {
  //     const hexAlpha = data[key].split(',')[3].replace(')', '')
  //     console.log('hexAlpha', key, hexAlpha)
  //     cleanColor = RGBA2HEX(data[key], hexAlpha)
  //   }
  //   return `<${key} value="${cleanColor}"/>`
  // })
  // props = replaceAll(props.toString(), ',', '\n')
}

module.exports = saveToURL