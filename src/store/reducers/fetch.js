const { requester, normalizer, writeTheme } = require('store/network')
const { addNewTheme, fetchTheme } = require('store/firebase')

function getThemes(state, emitter) {
  console.log('fetch')
  fetchTheme((data) => {
    state.themes = data
    state.themesLoaded = true
    emitter.emit('render')
  })
}

function getSingle(data, state, emitter) {
  const calls = {
    'theme': {
      'method': 'GET',
      'url': data.xmls.theme_j
    },
    'suggestions': {
      'method': 'GET',
      'url': data.xmls.suggestions_j
    }
  }
  state.themes[data.name].files = {}
  const storeFile = (respond, type) => {
    const json = JSON.parse(respond.currentTarget.response)[type]
    state.themes[data.name]['files'][type] = normalizer(json)
    state.themes[data.name].themeLoaded = true
  }
  const storeTheme = (respond) => {
    storeFile(respond, 'THEME')
    const defaultFiles = {
      'theme': state.themes.Default.files['THEME'],
      'suggestions': state.themes.Default.files['SUGGESTIONS']
    }
    emitter.emit('setDefault', defaultFiles)
  }
  const storeSuggestion = (respond) => {
    storeFile(respond, 'SUGGESTIONS')
  }

  requester(calls.theme, storeTheme, emitter)
  requester(calls.suggestions, storeSuggestion, emitter)
}

const fetchFiles = {
  getThemes,
  getSingle
}

module.exports = fetchFiles
