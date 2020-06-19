// const path = require('path');
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getIndex);
router.post('/', controller.postIndex);

router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);

router.get('pages/logged_in', controller.postLogin);

module.exports = router;