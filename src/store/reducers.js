const { getThemes, loadThemePage, getSingle } = require('store/reducers/fetch')
const updateUser = require('store/reducers/user')
const { updateThemeValue, updateThemeViewSettings, updatePublishTheme } = require('store/reducers/themeBuilder')

const reducers = {
  getThemes,
  getSingle,
  updateUser,
  updateThemeValue,
  updateThemeViewSettings,
  updatePublishTheme,
  loadThemePage
}

module.exports = reducers
