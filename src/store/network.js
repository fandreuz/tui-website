// you could put api stuff here

function requester(call, callback, emitter) {
  let xhr = new XMLHttpRequest() // eslint-disable-line
  xhr.addEventListener('load', callback)
  xhr.open(call.method, call.url, true)
  xhr.withCredentials = false
  xhr.send(null)
}
  // Changes XML to JSON
function xmlToJson(rawXML) {

  // Create the return object
  var obj = {}
  const parser = new DOMParser() // eslint-disable-line
  const xml = parser.parseFromString(rawXML, 'text/xml')
  return xml
}

module.exports = {requester, xmlToJson}