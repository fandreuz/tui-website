const { getThemes, getSingle } = require('store/reducers/fetch')
const updateUser = require('store/reducers/user')
const { setDefault, updateThemeValue, updateThemeViewSettings, updatePublishTheme } = require('store/reducers/themeBuilder')

const reducers = {
  getThemes,
  getSingle,
  setDefault,
  updateUser,
  updateThemeValue,
  updateThemeViewSettings,
  updatePublishTheme
}

module.exports = reducers
