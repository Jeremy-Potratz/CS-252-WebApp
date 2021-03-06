const express = require('express')
//const bodyParser = require('body-parser')
//const dotenv = require('dotenv');
//const firebase = require('firebase');
//const admin = require('firebase-admin');
//const functions = require('firebase-functions');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
//dotenv.load({ path: '.env' });

app.use(cors())

//app.use(bodyParser.json({limit: '50mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// We server resumes at url.com/email@example.com.pdf
//app.use('/resumes', express.static(__dirname + '/resumes'))
app.use(fileUpload())
// app.get('./index', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.use(bodyParser.urlencoded({ extended: true }));

const rootRouter = require('./routes/index');
//backend
app.use('/', rootRouter);
//rootRouter.initialize(app);
//module.exports = rootRouter


app.post('/auth', (req, res, next) => {
  console.log("hey");
});


app.listen(3000, () => {
  console.log('%s Express server listening on port %d', '✓', 3000);
});

module.exports = app;
