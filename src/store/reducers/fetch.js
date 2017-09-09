const { fetchThemes, updateTheme } = require('store/firebase')

function createDefault(state, data) {
  const theme = Object.assign({}, data.files['THEME'])
  const suggestions = Object.assign({}, data.files['SUGGESTIONS'])
  const newDefaultTheme = {
    theme,
    suggestions
  }
  updateTheme(
    `custom_theme_${state.currentUser.uid}`,
    state.currentUser.uid,
    newDefaultTheme
  )
  return newDefaultTheme
}



function getThemes(state, emitter) {
  fetchThemes((data) => {
    // Create custom theme base
    state.buildingTheme = createDefault(state, data['Default']);
    console.log(state.buildingTheme)
    const pages = []
    let singlePage = []
    let globalCount = 0
    const publishedThemes = [];
    Object.keys(data).map((theme) => {
      if (theme.indexOf('custom_theme_') === -1) {
        publishedThemes.push(theme);
      }
    });

    publishedThemes.map((theme) => {
      //count only published
      // push to a page
      if (typeof data[theme] !== 'undefined') {
        singlePage.push(data[theme])
        //count that page
        globalCount++

        if (singlePage.length === 20) {
          //20 themes per page then reset
          pages.push(singlePage)
          singlePage = []
        }
        if (singlePage.length > 0 && globalCount === publishedThemes.length) {
          //get any leftover theme that don't make a full 20
          pages.push(singlePage)
          singlePage = []
        }
      }
    }
    )
    state.themes = pages
    if (state.currentPage.length === 0) {
      state.currentPage = pages[0]
    }
    state.themesLoaded = true
    emitter.emit('render')
  })
}

function loadThemePage(state, emitter) {
  state.themePage = state.themePage + 1
  if (state.themePage === state.themes.length) {
    state.hidePagination = true
  } else {
    if (typeof state.themes[state.themePage] !== 'undefined') {
      state.currentPage = state.currentPage.concat(state.themes[state.themePage])
      // if () { state.hidePagination = true }
    }
  }
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
