const { getThemes, updateUser, getSingle, setDefault, updateThemeValue, updateThemeViewSettings } = require('store/reducers')
console.log(updateUser)
function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))
  emitter.on('setDefault', (data) => setDefault(data, state, emitter))
  emitter.on('updateUser', () => updateUser(state, emitter))
  emitter.on('updateThemeValue', (data) => updateThemeValue(data, state, emitter))
  emitter.on('updateThemeViewSettings', (data) => updateThemeViewSettings(data, state, emitter))

  state.themes = {}
  state.currentUser = {}
  state.themePage = 0
  state.themesLoaded = false
  state.buildingTheme = null
  state.buildingThemeName = ''
  state.themeViewSettings = {
    'battery': true,
    'storage': true,
    'time': true,
    'ram': true,
    'device': true,
    'overlay': false
  }
  state.fileExports = {'theme': '', 'suggestions': ''}
}
module.exports = store
