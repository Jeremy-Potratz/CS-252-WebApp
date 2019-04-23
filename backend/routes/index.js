var admin = require('firebase-admin');
//var app = admin.initializeApp();
//var provider = new firebase.auth.GoogleAuthProvider();
const router = require('express').Router()
const firebase = require('firebase');
const functions = require('firebase-functions');

var serviceAccount = require('/Users/jeremyottopotratz/Desktop/cs-252-WebApp/backend/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://CS-252-WebApp.firebaseio.com'
});
//authentication function for Google

var db = admin.firestore();
var users = db.collection('users')

console.log("hey there");

router.post('/auth', (req, res, next) => {
//auth here with signup
//console.log(req.body.username);
console.log(req.body.username[0]);
console.log(req.body.username[1]);


u = {};
u["username"] = req.body.username[0];
u["password"] = req.body.username[1];


// for (var key in req.body) {
//     u[key] = req.body[key]
// }

//u.password = hash;

users.doc(req.body.username[0]).set(u)


});

module.exports = router
