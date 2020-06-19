const express = require('express');
const app = express();
const mysql = require('mysql2');
const pageRoutes = require('./routes/routes');
const db = require('./db/connection');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const controller = require('./controllers/controller');
const user = require('./models/User');
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use routes
app.use(pageRoutes);



app.listen(8000);
console.log('listening on port 8000');
