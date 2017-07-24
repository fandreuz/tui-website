// you could put api stuff here
const { hexToRGB, convertAlpha } = require('utils/colors')

function requester(call, callback, emitter) {
  let xhr = new XMLHttpRequest() // eslint-disable-line
  xhr.addEventListener('load', callback)
  xhr.open(call.method, call.url, true)
  xhr.withCredentials = false
  xhr.send(null)
}
// Changes XML to JSON
function normalizer(rawJson) {
  let result = {}
  Object.keys(rawJson).map((key) => {
    if (rawJson[key].$) {
      let value = rawJson[key].$.value
      if (value.length === 9) {
        const noHash = value.substring(1)
        const hexopacity = noHash.substring(0, 2)
        const alpha = convertAlpha(hexopacity)
        const rgbaVal = hexToRGB(value.substring(3), alpha)
        value = '#' + value.substring(3)
      }
      result[key] = value
    }
  })
  return result
}

module.exports = { requester, normalizer }