const db = require("../config/db");


exports.users = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM admins");
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
}

exports.usersById = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM admins WHERE id = ?", [req.params.id]);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
}