const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");
const upload = require('../middlewares/uploadImage');
const { getProjects, deleteProjects, getProjectsById, postProjects, putProjects } = require("../controllers/project");

router.get('/projects', protect, isAdmin, getProjects)
router.get('/projects/:id', protect, isAdmin, getProjectsById)
router.post('/projects', protect, isAdmin, upload.single('image'), postProjects)
router.put('/projects/:id', protect, isAdmin,upload.single('image'), putProjects)
router.delete('/projects/:id', protect, isAdmin, deleteProjects)


module.exports = router;