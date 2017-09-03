const { fetchThemes } = require('store/firebase')

function getThemes(state, emitter) {
  fetchThemes((data) => {
    // state.themes = data
    const pages = []
    let themeCount = 0
    let pageCount = 0
    let singlePage = []
    let globalCount = 0
    Object.keys(data).map((theme) => {
     // add pagination
      singlePage.push(theme)
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
    state.themesLoaded = true
    emitter.emit('render')
  })
}

function getSingle(data, state, emitter) {
  // get single file,
  // create customTheme from default
}

const fetchFiles = {
  getThemes,
  getSingle
}

module.exports = fetchFiles
