const express = require('express');
const { postSignup } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', postSignup);
router.post('/login', postLogin);
// router.post('/logout', postSignup);


module.exports = router;