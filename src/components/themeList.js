const html = require('choo/html')
const themeListItem = require('components/themeListItem')
const Fairybread = require('fairybread')
const sv = require('../style/vars')


function themeList(state, emit) {
  // if the themes aren't loaded fetch them
  let list = html`<h3>Loading Theme list...</h3>`
  if (state.themesLoaded === false) {
    emit('getThemes')
  } else {
    const pi = state.themePage
    const currentPage = state.currentPage
      // Create a list from the theme files fetched
    list = currentPage.map((theme) => {
      // return a theme preview element
      if (typeof theme !== undefined) {
        return themeListItem([theme.name, theme], state, emit)
      }
    })
  }

  // Set Default theme for base  of theme creation
  return html`
     <div class="theme_list ${styles(sv)}">
      ${list}
      ${Pagination(state, emit)}
        </div>
 
     `
  function Pagination(state, emit) {
    const maxIndex = state.themes.length ? state.themes.length: 0;
    const index = state.themePage
    
    if (maxIndex !== index && state.themesLoaded === true && state.hidePagination !== true) {   
      return html`<button className="loadMore" onclick=${loadMoreThemes}>vvvv Load More themes vvvv</button>` 
    }
  }
  function loadMoreThemes() {
    emit('loadThemePage')
  }
    // Create Styles
  function styles(sv) {
    const sheet = new Fairybread('local')
    sheet.add('', `
          min-height:263px;
        `)
    sheet.add('.loadMore', `
          background: none;
          border: 0px;
          font-family:'lucida_consoleregular', monospace;
          color: ${sv.textColor}; 
          display: block;
          width: 100%;
          text-align:center;
          padding: 1em 0em;
          cursor: pointer;
    `)
    sheet.add('.theme_item', `
          width: 23%;
          padding:1em;
          min-width:250px;
          overflow:hidden;
          float:left;
        `)
    sheet.add('.fake', `
          min-height: 255px;
          min-width: 100%;
          position: relative;
          border: 1px solid;
          display: inline-block;
        `)
    sheet.add('.fake h1', `
          position: absolute;
          vertical-align: middle;
          width: 100%;
          left: 0px;
          text-align: center;
          top: 95px;
    `)
    sheet.add('.theme_item .actions', `
          color:white;
    `)
    sheet.add('.theme_item .author',`
        max-height: 15px;
        overflow:hidden;
        display:block;
        width: 100%;
        text-align: right;
        color: white;
        `)
    sheet.add('.theme_item .downloads', `
        float:right;
        `)
    sheet.add('.themeString', `
        color:white;
        border:1px solid;
        padding:0.5em;
        overflow:scroll
    `)

    sheet.render()
    return sheet.id
  }
}

module.exports = themeList
