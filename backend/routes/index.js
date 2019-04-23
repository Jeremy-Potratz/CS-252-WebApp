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

console.log("hey there");

router.post('/auth', (req, res, next) => {
//auth here with signup
console.log(req.body.username);
});

module.exports = router
