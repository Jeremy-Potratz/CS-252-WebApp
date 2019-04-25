var admin = require('firebase-admin');
//var app = admin.initializeApp();
//var provider = new firebase.auth.GoogleAuthProvider();
const router = require('express').Router()
const firebase = require('firebase');
const functions = require('firebase-functions');

var token = new Boolean(false);

var serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://CS-252-WebApp.firebaseio.com'
});
//authentication function for Google

var db = admin.firestore();
var users = db.collection('users')

router.post('/login', (req, res, next) => {
	var email = req.body.username[0]
	var password = req.body.username[1]
	if(token === true){
		return res.status(409).json({err: "already logged in as another user"})
	}
	else{
		users.where('username', '==', email).get()
			.then(snapshot => {
				if(snapshot.empty){
					return res.status(401).json({err: "no user associated with that email"})
				}
				});
		token = true
		return res.status(200).json
	}

});


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
return json({username: "user", password: "pass"})


});

module.exports = router
