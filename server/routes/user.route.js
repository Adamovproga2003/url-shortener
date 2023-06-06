const express = require('express');

// import controllers
const { getURLs } = require('../controllers/user.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/get_urls', authMiddleware, getURLs);

module.exports = router;