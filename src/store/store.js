const { getThemes, getSingle, setDefault, updateThemeValue } = require('store/reducers')

function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))
  emitter.on('setDefault', (data) => setDefault(data, state, emitter))
  emitter.on('updateThemeValue', (data) => updateThemeValue(data, state, emitter))

  state.themes = {}
  state.themePage = 0
  state.themesLoaded = false
  state.buildingTheme = null
}
module.exports = store