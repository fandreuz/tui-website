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

function addNewTheme(name, data) {
  // A post entry.
  debugger
  const postData = {
    name: name,
    uid: name,
    theme: data.theme,
    suggestions: data.suggestions
  }

  // Get a key for a new Post.
  // var newPostKey = firebase.database().ref().child('posts').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {}
  updates['/themes/' + name] = postData
  return firebase.database().ref().update(updates)
}

function fetchTheme(callback) {
  console.log('Firebase Themes')
  firebase.database().ref('/themes/').once('value').then(function (snapshot) {
    callback(snapshot.val())
  })
}

const tools = {
  fetchTheme,
  updateAllThemes,
  addNewTheme,
  firebase
}
module.exports = tools
