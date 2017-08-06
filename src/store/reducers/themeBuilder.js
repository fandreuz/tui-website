const { themeXML, suggestionXML } = require('utils/fileNormalizer')
function setDefault(data, state, emitter) {
  if (state.buildingTheme === null) {
    if (typeof data.theme !== 'undefined' && typeof data.suggestions !== 'undefined') {
      const theme = Object.assign({}, data.theme)
      const suggestions = Object.assign({}, data.suggestions)

      const newTheme = {
        theme,
        suggestions
      }
      state.buildingTheme = newTheme
      state.fileExports['theme'] = themeXML(theme)
      state.fileExports['suggestions'] = suggestionXML(suggestions)
      emitter.emit('render')
    }
  }
}
function updateThemeValue(data, state, emitter) {
  state.buildingTheme[data.file][data.name] = data.value
  state.fileExports['theme'] = themeXML(state.buildingTheme.theme)
  state.fileExports['suggestions'] = suggestionXML(state.buildingTheme.suggestions)
  emitter.emit('render')
}

function updateThemeViewSettings(data, state, emitter) {
  state.themeViewSettings[data[0]] = data[1]
  emitter.emit('render')
}

const themeBuilder = {
  setDefault,
  updateThemeValue,
  updateThemeViewSettings
}
module.exports = themeBuilder