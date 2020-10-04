const express = require('express');
const app = express();
const mysql = require('mysql2');
const pageRoutes = require('./routes/routes');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const controller = require('./controllers/controller');
const user = require('./models/User');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// set the view engine to ejs
app.set('view engine', 'ejs');

const sessionStore = new SequelizeStore({
	db: db,
	checkExpirationInterval: 15 * 60 * 1000,
	expiration: 7 * 24 * 60 * 1000
})

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  })
);

sessionStore.sync();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use routes
app.use(pageRoutes);
app.use(express.static(__dirname + '/static'));

app.listen(8000);
console.log('listening on port 8000');
