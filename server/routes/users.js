const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");
const { users,usersById } = require('../controllers/users');

router.get('/users', protect, isAdmin, users);
router.get('/users/:id', protect, isAdmin, usersById);


module.exports = router;