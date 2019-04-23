var admin = require('firebase-admin');
//nodvar app = admin.initializeApp();
//var provider = new firebase.auth.GoogleAuthProvider();
const router = require('express').Router()

var serviceAccount = require('/Users/jeremyottopotratz/Desktop/cs-252-WebApp/backend/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://CS-252-WebApp.firebaseio.com'
});

//authentication function for Google
router.post('auth-user', (req, res, next) => {
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});
