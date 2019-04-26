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
	var user = req.body.username[0]
	var password = req.body.username[1]

		users.where('username', '==', user).get()
			.then(snapshot => {
        snapshot.forEach(doc => {

                  if(password == doc.data().password){

                      console.log("You made it");

                  }else{
                    console.log("[enis]")
                  }

            //      console.log(doc.data().username);
            //      console.log(doc.data().password);

                })
              				});
		token = true

            return res.redirect("http://localhost:3001/home");



});


router.post('/addAct', (req, res, next) => {


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
res.redirect("http://localhost:3001/home");

});

module.exports = router
