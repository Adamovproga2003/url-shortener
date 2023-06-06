const express = require('express');

// import controllers
const { register, login, profile, logout } = require('../controllers/auth.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

// import validators
// const { runValidation } = require('../validators');
// const { userSignUpValidator, userSignInValidator, userResetPassword } = require('../validators/auth.validator');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile)
router.get('/logout', logout)

module.exports = router;