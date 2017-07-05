function setDefault(data, state, emitter) {
  if (state.buildingTheme === null) {
    if (typeof data.theme !== 'undefined' && typeof data.suggestions !== 'undefined') {
      console.log('DATA', data)
      const theme = Object.assign({}, data.theme)
      const suggestions = Object.assign({}, data.suggestions)

      const newTheme = {
        theme,
        suggestions
      }
      state.buildingTheme = newTheme
      emitter.emit('render')
    }
  }
}
function updateThemeValue(data, state, emitter) {
  state.buildingTheme[data.file][data.name] = data.value
  emitter.emit('render')
}

const themeBuilder = {
  setDefault,
  updateThemeValue
}
module.exports = themeBuilder