// const path = require('path');
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

// retrieves homepage
router.get('/', controller.getIndex);

// retrieves login page
router.get('/login', controller.getLogin);

// retrieves logged in page
router.get('/profile', controller.getLoggedIn);

// Home page and signup page
router.post('/', controller.postIndex);

// Login page redirects to logged in ejs page
router.post('/login', controller.postLogin);

// Logout route
router.post('/logout', controller.postLogout);

// Post posts route
router.post('/blog_post', controller.postBlogPost);

// Get updatedate post route
router.get('/update_post/:postId', controller.getUpdatePost);

// Post updatepost route
router.post('/update_post', controller.postUpdatePost);

// Post deletepost route
router.post('/delete_post', controller.postDeletePost);

module.exports = router;