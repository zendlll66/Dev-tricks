const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");

const { deleteBlogs, getAllBlogs, getBlogsById, postBlogs, putBlogs } = require('../controllers/blog');


router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogsById);
router.post('/blogs', protect, isAdmin, protect, postBlogs);
router.put('/blogs/:id', protect, isAdmin, putBlogs);
router.delete('/blogs/:id', protect, isAdmin, deleteBlogs);

module.exports = router;