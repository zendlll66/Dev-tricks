const mysql = require('mysql2/promise');
require('dotenv').config();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000, // 10 วิ
    ssl: {
        rejectUnauthorized: true,
    }
});


// 🔁 ป้องกัน connection หลุด
setInterval(async () => {
    try {
        await db.query('SELECT 1');
        // console.log('Ping successful');
    } catch (err) {
        console.error('Ping failed', err);
    }
}, 10000); // ping ทุก 30 วินาที


module.exports = db;