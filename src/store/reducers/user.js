const { anonSignup, firebase } = require('store/firebase')

function updateUser(state, emitter) {
  let currentUser = firebase.auth().currentUser
  if (currentUser === null) {
    anonSignup()
    currentUser = firebase.auth().currentUser
  } else {
    state.currentUser = {
      uid: currentUser.uid
    }
    state.buildingThemeName = `custom_theme_${state.currentUser.uid}`
  }
  emitter.emit('render')

}

module.exports = updateUser
