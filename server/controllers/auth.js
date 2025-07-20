const db = require('../config/db');
const generateToken = require('../utils/generateToken');
const bcrypt = require("bcrypt");
const { findAdminByEmail, createAdmin, meInfo } = require('../models/admin');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // ตรวจสอบว่า email มีอยู่แล้วไหม
        const existing = await findAdminByEmail(email);
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // เข้ารหัส password
        const hashedPassword = await bcrypt.hash(password, 10);

        // สร้าง admin ใหม่
        await createAdmin({
            username,
            email,
            passwordHash: hashedPassword
        });

        // ส่ง response
        res.status(200).json({
            success: true,
            message: "Register successfully"
        });
    } catch (err) {
        console.error(err); // ใช้ console.error เพื่อ log ให้ชัดเจน

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

exports.login = async (req, res) => {
    try {
        //รับ email กับ รหัสมา
        const { email, password } = req.body;

        const admin = await findAdminByEmail(email);
        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password_hash);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = generateToken(admin.id, admin.role);
        res.json({
            token,
            user: {
                id: admin.id,
                username: admin.username,
                email: admin.email,
                role: admin.role
            }
        })

    } catch (err) {
        console.log(err, {
            status: 500
        }).json({
            success: false,
            message: err
        });
    }
}

exports.logout = async (req, res) => {
    try {
        res.json({
            success: true,
            message: "Logout successfully"
        });
    } catch (err) {
        console.log(err, {
            status: 500
        }).json({
            success: false,
            message: err
        });
    }
}

exports.me = async (req, res) => {
    try {
        const { id } = req.user; // จาก token

        const user = await meInfo(id); // ใช้ฟังก์ชันที่เขียนไว้

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ user });
    } catch (err) {
        console.error("me error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
