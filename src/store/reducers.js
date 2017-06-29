const { requester, xmlToJson } = require('store/network')

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
    console.log(respond)
    state.themes[data.name]['files'][type] = JSON.parse(respond.currentTarget.response)[type]
  }
  const storeTheme = (respond) => { storeFile(respond, 'THEME') }
  const storeSuggestion = (respond) => { storeFile(respond, 'SUGGESTIONS') }

  requester(calls.theme, storeTheme, emitter)
  requester(calls.suggestion, storeSuggestion, emitter)

}
const reducers = {
  getThemes,
  getSingle
}

module.exports = reducers
