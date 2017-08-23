const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyArNX7NXNVhvs5Ead4w2q9sndbFF0EQbo0',
  authDomain: 'voltaic-charter-154600.firebaseapp.com',
  databaseURL: 'https://voltaic-charter-154600.firebaseio.com',
  projectId: 'voltaic-charter-154600',
  storageBucket: 'voltaic-charter-154600.appspot.com',
  messagingSenderId: '461882303040'
}
firebase.initializeApp(config)

function updateAllThemes(theme) {
  firebase.database().ref('themes/').set(theme)
}

function publishTheme(name, author, data) {
  // A post entry.
  const postData = {
    name: name,
    author: author,
    authorAuth: null,
    published: false,
    likes: 0,
    files: {
      THEME: data.theme,
      SUGGESTIONS: data.suggestions
    }
  }

  // Get a key for a new Post.
  // var newPostKey = firebase.database().ref().child('posts').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  let updates = {}
  updates['/themes/' + name] = postData
  return firebase.database().ref().update(updates)
}
function removeTheme(name){
  firebase.database().ref(`/themes/${name}`).remove()
}

function fetchThemes(callback) {
  firebase.database().ref('/themes/').once('value').then(function (snapshot) {
    callback(snapshot.val())
  })
}
function fetchSingleThemes(name, callback) {
  firebase.database().ref(`/themes/${}`).once('value').then(function (snapshot) {
    callback(snapshot.val())
  })
}

function anonSignup() {
  firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    if (error) { console.error(errorCode, errorMessage) }
  })

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('User is signed in.')
      const isAnonymous = user.isAnonymous
      const uid = user.uid
    } else {
      console.log('User is signed out.')
      // User is signed out.
    }
  })
}

const tools = {
  fetchThemes,
  updateAllThemes,
  publishTheme,
  firebase,
  anonSignup,
  removeTheme,
  fetchSingleThemes
}
module.exports = tools
