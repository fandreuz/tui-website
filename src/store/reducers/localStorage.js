function setItem(data, state, emitter) {
  localStorage.setItem(data.locale, data.file)
}

function getItem(locale, state, emitter) {
  return localStorage.getItem(locale)
}

const localStorageR = {
  setItem,
  getItem
}
module.exports = localStorageR