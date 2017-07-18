const { getThemes, getSingle } = require('store/reducers/fetch')
const { setDefault, updateThemeValue, updateThemeViewSettings } = require('store/reducers/themeBuilder')

const reducers = {
  getThemes,
  getSingle,
  setDefault,
  updateThemeValue,
  updateThemeViewSettings
}

module.exports = reducers
