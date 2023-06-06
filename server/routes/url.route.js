const express = require('express');

// import controllers
const { createURL, urlGet, validateAlias } = require('../controllers/url.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

// import validators
// const { runValidation } = require('../validators');
// const { userSignUpValidator, userSignInValidator, userResetPassword } = require('../validators/auth.validator');

const router = express.Router();

router.post('/', authMiddleware, createURL);
router.get('/', urlGet);
router.post('/validate', validateAlias)

module.exports = router;