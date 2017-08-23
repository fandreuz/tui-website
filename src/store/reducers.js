const { getThemes, getSingle } = require('store/reducers/fetch')
const updateUser = require('store/reducers/user')
const { setDefault, updateThemeValue, updateThemeViewSettings, publishTheme } = require('store/reducers/themeBuilder')

const reducers = {
  getThemes,
  getSingle,
  setDefault,
  updateUser,
  updateThemeValue,
  updateThemeViewSettings,
  publishTheme
}

module.exports = reducers
