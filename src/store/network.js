// you could put api stuff here
const { HEX2RGBA, convertAlpha } = require('utils/colors')

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
        const alpha = convertAlpha(hexopacity, 'FROM_HEX')
        console.log(value)
        const rgbaVal = HEX2RGBA(value)
        console.log(key, rgbaVal)
        value = rgbaVal
      }
      result[key] = value
    }
  })
  return result
}

module.exports = { requester, normalizer }