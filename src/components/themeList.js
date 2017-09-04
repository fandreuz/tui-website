const html = require('choo/html')
const themeListItem = require('components/themeListItem')
const Fairybread = require('fairybread')

function themeList(state, emit) {
  // if the themes aren't loaded fetch them
  let list = html`<h3>Loading theme list...</h3>`
  if (state.themesLoaded === false) {
    emit('getThemes')
  } else {
    const pi = state.themePage
    const currentPage = state.themes[pi]
      // Create a list from the theme files fetched
    list = currentPage.map((theme) => {
      // return a theme preview element
      if (theme.published === true) {
        return themeListItem([theme.name, theme], state, emit)
      }
    })
  }

  // Set Default theme for base  of theme creation
  if (typeof state.themes.Default !== 'undefined') {
    const defaults = {
      'theme': state.themes.Default.files['THEME'],
      'suggestions': state.themes.Default.files['SUGGESTIONS']
    }
    emit('setDefault', defaults)
  }

  // Return the List
  //  <div className="theme_item "><a className="fake" href="/create" ><h1>+ <br>New theme</h1></a></div>
  //
  return html`
     <div class="theme_list ${styles()}">
      ${list}
     </div>
  `
  // Create Styles
  function styles() {
    const sheet = new Fairybread('local')
    sheet.add('', `
          min-height:263px;
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
