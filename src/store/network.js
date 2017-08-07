// you could put api stuff here
const { HEX2RGBA, convertAlpha } = require('utils/colors')
const firebase = require('firebase')
function requester(call, callback, emitter) {
  let xhr = new XMLHttpRequest() // eslint-disable-line
  xhr.addEventListener('load', callback)
  xhr.open(call.method, call.url, true)
  xhr.withCredentials = false
  xhr.send(null)
}
// function poster() {
//   var params = typeof data == 'string' ? data : Object.keys(data).map(
//     function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
//   ).join('&');

//   var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//   xhr.open('POST', url);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState > 3 && xhr.status == 200) { success(xhr.responseText); }
//   };
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.send(params);
//   return xhr;
// }
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
        const rgbaVal = HEX2RGBA(value, alpha)
        value = rgbaVal
      }
      result[key] = value
    }
  })
  return result
}
var config = {
  apiKey: 'AIzaSyArNX7NXNVhvs5Ead4w2q9sndbFF0EQbo0',
  authDomain: 'voltaic-charter-154600.firebaseapp.com',
  databaseURL: 'https://voltaic-charter-154600.firebaseio.com',
  projectId: 'voltaic-charter-154600',
  storageBucket: 'voltaic-charter-154600.appspot.com',
  messagingSenderId: '461882303040'
}
firebase.initializeApp(config)
var database = firebase.database()
function writeTheme(name, theme) {
  firebase.database().ref('themes/').set(theme)
}
module.exports = { requester, normalizer, writeTheme }