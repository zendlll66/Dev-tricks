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
