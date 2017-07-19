const { getThemes, getSingle, setDefault, updateThemeValue, updateThemeViewSettings } = require('store/reducers')

function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))
  emitter.on('setDefault', (data) => setDefault(data, state, emitter))
  emitter.on('updateThemeValue', (data) => updateThemeValue(data, state, emitter))
  emitter.on('updateThemeViewSettings', (data) => updateThemeViewSettings(data, state, emitter))

  state.themes = {}
  state.themePage = 0
  state.themesLoaded = false
  state.buildingTheme = null
  state.themeViewSettings = {
    'battery': true,
    'storage': true,
    'time': true,
    'ram': true,
    'device': true,
    'wallpaper': '/imgs/default-bg.jpg'
  }
  state.fileExports = {'theme': '', 'suggestions': ''}
}
module.exports = store