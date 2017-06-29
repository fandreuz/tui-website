const html = require('choo/html')
const themeListItem = require('components/themeListItem')

function themeList(state, emit) {
  if (state.themesLoaded === false) {
    emit('getThemes')
  }
  const list = Object.keys(state.themes).map((name) => {
    emit('getSingle', {
      name: name,
      xmls: state.themes[name]
    })
    return themeListItem([name, state.themes[name]], state, emit)
  })
  console.log(state)
  return html`
     <div class="theme_list">
      ${list}
     </div>
  `
}

module.exports = themeList