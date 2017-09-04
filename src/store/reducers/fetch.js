const { fetchThemes } = require('store/firebase')

function getThemes(state, emitter) {
  fetchThemes((data) => {
    // state.themes = data
    const pages = []
    let singlePage = []
    let globalCount = 0
    Object.keys(data).map((theme) => {
     // add pagination
      singlePage.push(data[theme])
      globalCount++
      if (singlePage.length === 20) {
        pages.push(singlePage)
        singlePage = []
      }
      if (singlePage.length > 0 && globalCount === Object.keys(data).length) {
        pages.push(singlePage)
        singlePage = []
      }
      console.log(pages)
      // console.log(singlePage)
    })
    state.themes = pages
    if (state.currentPage.length === 0) {
      state.currentPage = pages[0]
    }
    state.themesLoaded = true
    emitter.emit('render')
  })
}
function loadThemePage(state, emitter) {
  state.themePage = state.themePage++
  state.currentPage = state.currentPage.concat(state.pages[state.themePage])
  emitter.emit('render')
}

function getSingle(data, state, emitter) {
  // get single file,
  // create customTheme from default
}

const fetchFiles = {
  getThemes,
  getSingle,
  loadThemePage
}

module.exports = fetchFiles
