/*

// Girondist Planning System
// (C) CCXXVII Zac Finger
// gpstime.org

// SQL/Knex functionality built in accordance with tutorial by Robert Tod:
// https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f

// Handlebars/Express built following tutorial by Rene Kulik:
// https://www.kulik.io/2018/01/02/how-to-use-handlebars-with-express/

///////////////////////
///////////////////////

// Express scaffolding
// https://expressjs.com/en/starter/generator.html

// ExpressJS tutorials
// https://www.tutorialspoint.com/expressjs/expressjs_cookies.htm
// https://www.codecademy.com/learn/learn-express
// https://www.google.com/search?q=express+js+tutorial

// Handlebars tutorials
https://hackersandslackers.com/handlebars-templating-in-expressjs/
https://www.kulik.io/2018/01/02/how-to-use-handlebars-with-express/

///// Express + MySQL tutorial
https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f

///// MySQL + NPM (assumes ubuntu)
https://medium.com/technoetics/installing-and-setting-up-mysql-with-nodejs-in-ubuntu-75e0c0a693ba
https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
https://medium.com/technoetics/updating-values-in-mysql-database-using-nodejs-14e396e576eb

///// MongoDB
http://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359
https://medium.com/@kevinhsu_83500/user-authentication-with-node-js-and-mongodb-c8b1645513f9

///// Cloud authentication services
https://scotch.io/tutorials/build-and-understand-a-simple-nodejs-website-with-user-authentication

///// etc
https://www.google.com/search?q=how+to+recover+from+an+unproductive+day&oq=how+to+recover+from+unprodu&aqs=chrome.1.69i57j0.6055j1j7&sourceid=chrome&ie=UTF-8

//// other resources
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
https://blog.bitsrc.io/seeding-your-database-with-thousands-of-users-using-knex-js-and-faker-js-6009a2e5ffbf
https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

//// other notes
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'TmaEVGynMU5H5YuY!'
https://512pixels.net/projects/default-mac-wallpapers-in-5k/
mysql -u root -p

*/

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();

var path = require('path');
app.set('views', path.resolve(__dirname, 'views'));

// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');
//app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	//res.send('Hello World!');
	res.render('index');
});

app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password
    })
    .then(({ success }) => {
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})