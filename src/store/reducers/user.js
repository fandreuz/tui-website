const { anonSignup, firebase } = require('store/firebase')

function updateUser(state) {
  let currentUser = firebase.auth().currentUser
  if (currentUser === null) {
    anonSignup()
    currentUser = firebase.auth().currentUser
  }
  console.log(state)
  state.currentUser = {
    isAnonymous: currentUser.isAnonymous,
    uid: currentUser.uid
  }
}

module.exports = updateUser
