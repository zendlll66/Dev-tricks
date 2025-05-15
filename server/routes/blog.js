const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");
const upload = require('../middlewares/uploadImage');
const { deleteBlogs, getAllBlogs, getBlogsById, postBlogs, putBlogs } = require('../controllers/blog');
const { uploadImages } = require('../controllers/upload');


router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogsById);
router.post('/blogs', protect, isAdmin, upload.single('image'), postBlogs);
router.put('/blogs/:id', protect, isAdmin, upload.single('image'), putBlogs);
router.delete('/blogs/:id', protect, isAdmin, deleteBlogs);

// Add new route for uploading images in blocks
router.post('/upload/images', protect, upload.single('image'), uploadImages);

module.exports = router;