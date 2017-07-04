const html = require('choo/html')
const themeControls = require('components/controls/themeControls')
const themePreview = require('components/themePreview')

function themeBuilder(state, emit) {
  console.log(state.themes.Default)
  const defaults = {
    'theme': state.themes.Default.files['THEME'],
    'suggestions': state.themes.Default.files['SUGGESTIONS']
  }

  return html`
    <div>
     <div className="theme_details">
     <div className="half">
        <ul>
          <li>
            <label htmlFor="">Theme Name</label>
            <input type="text"/>
          </li>
          <li>
            <label htmlFor="">Author Name</label>
            <input type="text"/>
          </li>
        </ul>
        </div>
        <div className="half">
          ${themePreview(defaults, state, emit)}
          </div>
        </div>
        <div className="two-thirds third">
          ${themeControls(defaults, state, emit)}
        </div>

    </div>
  `
}

module.exports = themeBuilder