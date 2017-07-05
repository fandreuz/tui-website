const { requester, normalizer } = require('store/network')

function getThemes(state, emitter) {
  const storeThemes = (respond) => {
    state.themes = JSON.parse(respond.currentTarget.response)
    state.themesLoaded = true
    emitter.emit('render')
  }
  const call = {
    'method': 'GET',
    'url': 'https://raw.githubusercontent.com/stagfoo/tui-themes/master/endpoint.json'
  }
  requester(call, storeThemes, emitter)
}

function getSingle(data, state, emitter) {
  const calls = {
    'theme': {
      'method': 'GET',
      'url': data.xmls.theme_j
    },
    'suggestion': {
      'method': 'GET',
      'url': data.xmls.suggestion_j
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
    emitter.emit('render')
  }
  const storeSuggestion = (respond) => { storeFile(respond, 'SUGGESTIONS') }

  requester(calls.theme, storeTheme, emitter)
  requester(calls.suggestion, storeSuggestion, emitter)
}

const fetchFiles = {
  getThemes,
  getSingle
}

module.exports = fetchFiles
