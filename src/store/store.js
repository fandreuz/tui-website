const { getThemes, updateUser, getSingle, loadThemePage, updatePublishTheme, setDefault, updateThemeValue, updateThemeViewSettings } = require('store/reducers')
function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('publishTheme', (data) => updatePublishTheme(data, state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))
  emitter.on('updateUser', () => updateUser(state, emitter))
  emitter.on('updateThemeValue', (data) => updateThemeValue(data, state, emitter))
  emitter.on('updateThemeViewSettings', (data) => updateThemeViewSettings(data, state, emitter))
  emitter.on('loadThemePage', () => loadThemePage(state, emitter))

  state.themes = {}
  state.themeList = {}
  state.currentUser = {}
  state.themePage = 1
  state.hidePagination = false
  state.currentPage = []
  state.themesLoaded = false
  state.buildingTheme = null
  state.buildingThemeName = ''
  state.publishStatus = null
  state.themeViewSettings = {
    'battery': true,
    'storage': true,
    'time': true,
    'ram': true,
    'device': true,
    'overlay': false
  }
  state.fileExports = { 'theme': '', 'suggestions': '' }
}
module.exports = store
