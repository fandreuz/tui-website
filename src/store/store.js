const { getThemes, getSingle } = require('store/reducers')

function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))

  state.themes = {}
  state.themePage = 0
  state.themesLoaded = false
  state.buildingTheme = {}

}

module.exports = store