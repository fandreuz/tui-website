const html = require('choo/html')
const themeListItem = require('components/themeListItem')
const Fairybread = require('fairybread')

function themeList(state, emit) {
  if (state.themesLoaded === false) {
    emit('getThemes')
  }
  const list = Object.keys(state.themes).map((name) => {
    console.log(state.themes[name].themeLoaded)
    if (state.themes[name].themeLoaded !== true) {
      emit('getSingle', {
        name: name,
        xmls: state.themes[name]
      })
    }
    return themeListItem([name, state.themes[name]], state, emit)
  })
  console.log(state)
  return html`
     <div class="theme_list ${styles()}">
      ${list}
     </div>
  `
  function styles() {
    const sheet = new Fairybread('local')
    sheet.add('.theme_item', `
          width: 23%;
          padding:1em;
          display:inline-block;
        `)
    sheet.add('.theme_item .theme_preview', `
          border:1px solid #282828;
          display:block;
          padding:1em;

      `)
    sheet.add('.theme_item .theme_preview span', `
          clear:both;
          display:block;
      `)
    sheet.add('.theme_preview .input_area', `
           display:block;
           clear:both;
           overflow:hidden;
    `)
    sheet.add('.theme_preview .input_area i', `
              font-style:normal;
    `)
    sheet.add('.theme_preview .bottom-toolbar', `
           display:flex;
           clear:both;
    `)
    sheet.add('.theme_preview .bottom-toolbar i', `
           flex:1;
    `)
    sheet.add('.theme_preview i', `
      `)

    sheet.render()
    return sheet.id
  }
}

module.exports = themeList