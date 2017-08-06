const { requester, normalizer } = require('store/network')

function getThemes(state, emitter) {
  const storeThemes = (respond) => {
    state.themes = JSON.parse(respond.currentTarget.response)
    state.themesLoaded = true
    Object.keys(state.themes).map((name) => {
      if (state.themes[name].themeLoaded !== true) {
        emitter.emit('getSingle', {
          name: name,
          xmls: state.themes[name]
        })
      }
    })
    setTimeout(() => {
      emitter.emit('render')
    }, 3000)

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
