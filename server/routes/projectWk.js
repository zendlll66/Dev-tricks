const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/auth");
const upload = require('../middlewares/uploadImage');
const { getProjects, deleteProjects, getProjectsById, postProjects, putProjects } = require("../controllers/projectWk");

router.get('/projects-wk', getProjects)
router.get('/projects-wk/:id', getProjectsById)
router.post('/projects-wk', protect, isAdmin, upload.single('image'), postProjects)
router.put('/projects-wk/:id', protect, isAdmin, upload.single('image'), putProjects)
router.delete('/projects-wk/:id', protect, isAdmin, deleteProjects)


module.exports = router;