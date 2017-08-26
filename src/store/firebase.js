const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyArNX7NXNVhvs5Ead4w2q9sndbFF0EQbo0',
  authDomain: 'voltaic-charter-154600.firebaseapp.com',
  databaseURL: 'https://voltaic-charter-154600.firebaseio.com',
  projectId: 'voltaic-charter-154600',
  storageBucket: 'voltaic-charter-154600.appspot.com',
  messagingSenderId: '461882303040'
}
const cleanTemplate = {
  name: null,
  author: null,
  authorAuth: null,
  published: false,
  downloads: 0,
  files: {
    THEME: null,
    SUGGESTIONS: null
  }
}
let themeTemplate = {
  name: null,
  author: null,
  authorAuth: null,
  published: false,
  downloads: 0,
  files: {
    THEME: null,
    SUGGESTIONS: null
  }
}

firebase.initializeApp(config)

function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}

function updateAllThemes(themes) {
  firebase.database().ref('themes/').set(themes)
}

function updateTheme(name, uid, data) {
  anonSignup()
  if (uid) {
    // A post entry.
    themeTemplate = cleanTemplate
    themeTemplate.name = replaceAll(name, ' ', '-')
    themeTemplate.author = null
    themeTemplate.authorAuth = uid
    themeTemplate.published = false
    themeTemplate.downloads = 0
    themeTemplate.files = {
      THEME: data.theme,
      SUGGESTIONS: data.suggestions
    }

    const postData = themeTemplate

    // Get a key for a new Post.
    // var newPostKey = firebase.database().ref().child('posts').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {}
    updates['/themes/' + name] = postData
    return firebase.database().ref().update(updates)
  }
}
function publishTheme(data, uid, theme) {
  anonSignup()
  if (uid) {
    // A post entry.
    themeTemplate = cleanTemplate
    themeTemplate.name = replaceAll(data.name, ' ', '-')
    themeTemplate.author = data.author
    themeTemplate.authorAuth = uid
    themeTemplate.published = true
    themeTemplate.downloads = 0
    themeTemplate.files = {
      THEME: theme.theme,
      SUGGESTIONS: theme.suggestions
    }

    const postData = themeTemplate
    let updates = {}
    updates['/themes/' + data.name] = postData
    return firebase.database().ref().update(updates)
  }
}
function removeTheme(name) {
  firebase.database().ref(`/themes/${name}`).remove()
}

function fetchThemes(callback) {
  firebase.database().ref('/themes/').once('value').then(function (snapshot) {
    callback(snapshot.val())
  })
}
function fetchSingleThemes(name, callback) {
  firebase.database().ref(`/themes/${name}`).once('value').then(function (snapshot) {
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
      const loggedIn = { isAnonymous, uid }
      return loggedIn
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
  fetchSingleThemes,
  updateTheme
}
module.exports = tools
