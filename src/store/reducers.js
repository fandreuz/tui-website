const { getThemes, getSingle } = require('store/reducers/fetch')
const { setDefault, updateThemeValue } = require('store/reducers/themeBuilder')

const reducers = {
  getThemes,
  getSingle,
  setDefault,
  updateThemeValue
}

module.exports = reducers
