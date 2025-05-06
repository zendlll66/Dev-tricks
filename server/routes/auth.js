const express = require('express');
const router = express.Router();

const { register, login, me,logout } = require('../controllers/auth');
const { protect } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, me)
router.post('/logout', logout);

module.exports = router;