const html = require('choo/html')
const previewControls = require('components/controls/previewControls')
const preview = require('components/preview/preview')
const saveButton = require('components/controls/common/saveButton')
const battery = require('components/controls/display/battery')
const overlay = require('components/controls/display/overlay')

const showToggle = require('components/controls/display/showToggle')
const styles = require('./styles')

function builder(state, emit) {
  // if the themes aren't loaded fetch them
  if (state.themesLoaded !== true) {
    emit('getThemes')
    emit('render')
  }
  // Set Default theme for basis of theme creation

  const defaults = state.buildingTheme
  if (defaults !== null) {
    return html`
      <div className=${styles()}>
      <div className="theme_details">
      <div className="theme_settings half">
        ${battery(state, emit)}
        ${showToggle('time', 'time_color', state, emit)}
        ${showToggle('ram', 'ram_color', state, emit)}
        ${showToggle('storage', 'storage_color', state, emit)}
        ${showToggle('device', 'device_color', state, emit)}
        ${overlay(state, emit)}
      </div>
      <div id="customTheme" className="half">
            ${preview(defaults, state, emit)}
          </div>
      </div>
          <div className="two-thirds third">
            ${previewControls(defaults, state, emit)}
          </div>
          <div id="downloads">
            ${saveButton('theme', 'buildingTheme', state, emit)}
            ${saveButton('suggestions', 'buildingSuggestion', state, emit)}
          </div>
      </div>
    `
  }
}

module.exports = builder
