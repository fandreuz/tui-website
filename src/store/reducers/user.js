const { anonSignup, firebase } = require('store/firebase')

function updateUser(state) {
  let currentUser = firebase.auth().currentUser
  if (currentUser === null) {
    anonSignup()
    currentUser = firebase.auth().currentUser
  } else {
    state.currentUser = {
      isAnonymous: currentUser.isAnonymous,
      uid: currentUser.uid
    }
    state.buildingThemeName = `custom_theme_${state.currentUser.uid}`
  }
}

module.exports = updateUser
