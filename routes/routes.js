// const path = require('path');
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

// retrieves homepage
router.get('/', controller.getIndex);

// retrieves login page
router.get('/login', controller.getLogin);

// retrieves logged in page
router.get('/logged_in', controller.getLoggedIn);

// Home page and signup page
router.post('/', controller.postIndex);

// Login page redirects to logged in ejs page
router.post('/login', controller.postLogin);


module.exports = router;