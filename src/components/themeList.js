const html = require('choo/html')
const themeListItem = require('components/themeListItem')
const Fairybread = require('fairybread')

function themeList(state, emit) {
  if (state.themesLoaded === false) {
    emit('getThemes')
  }
  const list = Object.keys(state.themes).map((name) => {
    if (state.themes[name].themeLoaded !== true) {
      emit('getSingle', {
        name: name,
        xmls: state.themes[name]
      })
    }
    return themeListItem([name, state.themes[name]], state, emit)
  })
  return html`
     <div class="theme_list ${styles()}">
      ${list}
     </div>
  `
  function styles() {
    const sheet = new Fairybread('local')
    sheet.add('', `
          padding-top:4em;
          min-height:263px;
        `)
    sheet.add('.theme_item', `
          width: 23%;
          padding:1em;
          display:inline-block;
        `)
    sheet.add('.theme_item .actions', `
          color:white;
    `)
    sheet.add('.theme_preview', `
          border:1px solid #282828;
          display:block;
          padding:1em;
          font-size:1.2em;
      `)
    sheet.add('.theme_preview span', `
          clear:both;
          display:block;
      `)
    sheet.add('.theme_preview .input_area', `
           display:block;
           clear:both;
           overflow:hidden;
    `)
    sheet.add('.theme_preview .input_area span.input_color', `
           display:inline;

    `)
    sheet.add('.theme_preview .input_area i', `
              font-style:normal;
              font-size:1.3em;
    `)
    sheet.add('.theme_preview .bottom-toolbar', `
           display:flex;
           clear:both;
           font-size:1.5em;
           padding-top:1em;
           padding-bottom:1em;
           text-align:center;
    `)
    sheet.add(`.theme_preview .bottom-toolbar i`, `
           flex:1;
           font-size:1em;
    `)
    sheet.add('.theme_preview input', `
          background:transparent;
          border:0px;
          width:75%;
      `)
    sheet.add(`.theme_preview .suggestions div`, `
           display:inline-block;
           padding:0.6em;
           margin:0.4em 0.2em;
    `)
    sheet.render()
    return sheet.id
  }
}

module.exports = themeList