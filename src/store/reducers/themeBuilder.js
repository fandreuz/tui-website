const { themeXML, suggestionXML } = require('utils/fileNormalizer')
const { publishTheme, updateTheme, removeTheme, fetchSingleThemes } = require('store/firebase')

function updateThemeValue(data, state, emitter) {
  state.buildingTheme[data.file][data.name] = data.value
  state.fileExports['theme'] = themeXML(state.buildingTheme.theme)
  state.fileExports['suggestions'] = suggestionXML(state.buildingTheme.suggestions)
  updateTheme(`custom_theme_${state.currentUser.uid}`, state.currentUser.uid, state.buildingTheme)
  state.publishStatus = null
  emitter.emit('render')
}

function updateThemeViewSettings(data, state, emitter) {
  state.themeViewSettings[data[0]] = data[1]
  // normalizer
  emitter.emit('render')
}

function updatePublishTheme(data, state, emitter) {
  state.publishStatus = null
  const hasSpaces = (data.name.indexOf(' ') !== -1)
  //console.log('hasSpaces', hasSpaces)
  if (hasSpaces) {
    state.publishStatus = false
    emitter.emit('render')
    return
  }
  function callback(snapshot) {
    if (snapshot === null) {
      publishTheme(data, state.currentUser.uid, state.buildingTheme)
      removeTheme(`custom_theme_${state.currentUser.uid}`)
      state.publishStatus = true
      emitter.emit('render')
    } else {
      state.publishStatus = false
      emitter.emit('render')
    }
  }
  if (data !== null && data !== '' && typeof data !== 'undefined') {
    fetchSingleThemes(data.name, callback)
  } else {
    state.publishStatus = false
    emitter.emit('render')
  }

}

const themeBuilder = {
  updateThemeValue,
  updateThemeViewSettings,
  publishTheme,
  updatePublishTheme
}
module.exports = themeBuilder
