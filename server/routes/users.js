const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");
const { users } = require('../controllers/users');

router.get('/users',protect,isAdmin, users);


module.exports = router;