const { getThemes, getSingle } = require('store/reducers')

function store(state, emitter) {
  emitter.on('getThemes', () => getThemes(state, emitter))
  emitter.on('getSingle', (data) => getSingle(data, state, emitter))

  state.train = []
  state.themes = {}
  state.themesLoaded = false

}

module.exports = store