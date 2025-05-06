const db = require('../config/db');

exports.findAdminByEmail = async (email) => {
    const [rows] = await db.query(
        'SELECT * FROM admins WHERE email = ?',
        [email]
    );
    return rows[0];
};

exports.createAdmin = async ({ username, email, passwordHash }) => {
    await db.query(
        "INSERT INTO admins (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
        [username, email, passwordHash, "admin"]
    );
};


exports.meInfo = async (id) => {
    const [rows] = await db.query(
        "SELECT id, username , email, role FROM admins WHERE id = ?",
        [id]
    );
    return rows[0];
};
