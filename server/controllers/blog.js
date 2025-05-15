const db = require("../config/db");
const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// GET /api/blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const [blogs] = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
        const results = await Promise.all(
            blogs.map(async blog => {
                const [blocks] = await db.query('SELECT * FROM blocks WHERE blog_id = ?', [blog.id]);
                return { ...blog, blocks };
            })
        );

        res.json(results);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }

}


// GET /api/blogs/:id

exports.getBlogsById = async (req, res) => {
    try {
        const [blogs] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        if (blogs.length === 0) return res.status(404).json({ error: 'Not found' });

        const [blocks] = await db.query('SELECT * FROM blocks WHERE blog_id = ?', [req.params.id]);
        res.json({ ...blogs[0], blocks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
}


// POST /api/blogs
exports.postBlogs = async (req, res) => {
    try {
        const { title, description, blocks } = req.body;
        // แปลง blocks จาก JSON string เป็น object
        const parsedBlocks = JSON.parse(blocks);
        
        // When using Cloudinary storage, the file URL is available in req.file.path
        const image_url = req.file ? req.file.path : null;
        
        const [result] = await db.query(
            'INSERT INTO blogs (title, description, image_url) VALUES (?, ?, ?)',
            [title, description, image_url]
        );

        const blogId = result.insertId;

        for (const block of parsedBlocks) {
            if (!block.type) {
                throw new Error('Block type is required');
            }
            await db.query(
                'INSERT INTO blocks (blog_id, type, data) VALUES (?, ?, ?)',
                [blogId, block.type, JSON.stringify(block.data)]
            );
        }

        res.status(201).json({ id: blogId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Error creating blog post' });
    }
}


// PUT /api/blogs/:id
exports.putBlogs = async (req, res) => {
    try {
        const { title, description, blocks } = req.body;
        await db.query(
            'UPDATE blogs SET title = ?, description = ?, updated_at = NOW() WHERE id = ?',
            [title, description, req.params.id]
        );

        await db.query('DELETE FROM blocks WHERE blog_id = ?', [req.params.id]);

        for (const block of blocks) {
            await db.query(
                'INSERT INTO blocks (blog_id, type, data) VALUES (?, ?, ?)',
                [req.params.id, block.type, JSON.stringify(block.data)]
            );
        }

        res.json({ message: 'Updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
}


// DELETE /api/blogs/:id
exports.deleteBlogs = async (req, res) => {
    try {
        await db.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.json({ message: 'Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
}



