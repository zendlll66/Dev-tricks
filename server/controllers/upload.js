const cloudinary = require('../config/cloudinary');

exports.uploadImages = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'ไม่พบไฟล์รูปภาพ' });
        }

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload(req.file.path, {
                folder: 'blogs',
                resource_type: 'auto'
            }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
            });
        });

        res.json({ url: result.secure_url });
    } catch (err) {
        console.error('Error uploading image:', err);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ' });
    }
}; 