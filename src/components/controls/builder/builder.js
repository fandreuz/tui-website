const html = require('choo/html')
const previewControls = require('components/controls/previewControls')
const preview = require('components/preview/preview')
const saveButton = require('components/controls/common/saveButton')
const publishButton = require('components/controls/common/publishBtn')
const styles = require('./styles')

function builder(state, emit) {

  // if the themes aren't loaded fetch them
  if (state.themesLoaded !== true) {
    emit('getThemes')
    emit('render')
  }

  // Set Default theme for basis of theme creation

  const defaults = state.buildingTheme
  const copyString = `theme -apply ${state.buildingThemeName}`
  if (defaults !== null) {
    return html`
      <div className=${styles()}>
      <div className="theme_details">
     <div id="customTheme" className="half">
            ${preview(defaults, state, emit)}
          </div>
      </div>
          <div className="two-thirds third">
            ${previewControls(defaults, state, emit)}
          </div>
          <div id="downloads">
          ${publishButton(state, emit)}
          <div className="desktop-only">
            <div className="themeString">
            <code><pre>$ ${copyString}</pre></code>
            </div>
          </div>
            <div className="mobile-only">
            ${saveButton(copyString, state, emit)}
          </div>
            </div>
      </div>
    `
  } else {
    return html`Loading default themes`
  }
}

module.exports = builder
