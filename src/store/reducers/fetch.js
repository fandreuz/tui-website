const { requester, normalizer, writeTheme } = require('store/network')
const { fetchThemes } = require('store/firebase')

function getThemes(state, emitter) {
  console.log('fetch')
  fetchThemes((data) => {
    state.themes = data
    Object.keys(data).map((theme) => {
      console.log(data[theme])
    })
    state.themesLoaded = true
    emitter.emit('render')
  })
}

function getSingle(data, state, emitter) {
  //get single file,
  // create customTheme from default
}

const fetchFiles = {
  getThemes,
  getSingle
}

module.exports = fetchFiles
