const { getThemes, getSingle } = require('store/reducers/fetch')
const { setDefault, updateThemeValue } = require('store/reducers/themeBuilder')
const { localStorageR } = require('store/reducers/localStorage')

const reducers = {
  getThemes,
  getSingle,
  setDefault,
  updateThemeValue,
  localStorageR
}

module.exports = reducers
