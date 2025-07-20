const db = require('../config/db'); // เชื่อมกับ MySQL

const insertProject = async (data) => {
    const { title, description, role, image_url, demo_link, github_link } = data;
    const [result] = await db.execute(
        `INSERT INTO projectsWk (title, description, role, image_url, demo_link, github_link)
     VALUES (?, ?, ?, ?, ?, ?)`,
        [title, description, role, image_url, demo_link, github_link]
    );
    return result.insertId;
};

const insertTechStack = async (techName) => {
    const [existing] = await db.execute(`SELECT id FROM tech_stacksWk WHERE name = ?`, [techName]);
    if (existing.length > 0) return existing[0].id;

    const [insert] = await db.execute(`INSERT INTO tech_stacksWk (name) VALUES (?)`, [techName]);
    return insert.insertId;
};

const linkTechToProject = async (projectId, techId) => {
    await db.execute(`INSERT INTO project_techWk (project_id, tech_id) VALUES (?, ?)`, [projectId, techId]);
};


const getProjectById = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM projectsWk WHERE id = ?`, [id]);
    return rows[0];
};

module.exports = {
    insertProject,
    insertTechStack,
    linkTechToProject,
    getProjectById
};
