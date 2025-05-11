const db = require("../config/db");
const {
  insertProject,
  insertTechStack,
  linkTechToProject,
  getProjectById,
} = require("../models/projects");

exports.getProjects = async (req, res) => {
  try {
    const [projects] = await db.execute(`
      SELECT p.*, 
             JSON_ARRAYAGG(t.name) AS techStack
      FROM projects p
      LEFT JOIN project_tech pt ON p.id = pt.project_id
      LEFT JOIN tech_stacks t ON pt.tech_id = t.id
      GROUP BY p.id
    `);

    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: err.message,
    });
  }
};

exports.getProjectsById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await getProjectById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

exports.postProjects = async (req, res) => {
  try {
    const { title, description, role, demo_link, github_link, techStack } =
      req.body;
    const image_url = req.file.path;
    const projectId = await insertProject({
      title,
      description,
      role,
      image_url,
      demo_link,
      github_link,
    });

    const techs = JSON.parse(techStack);
    for (const tech of techs) {
      const techId = await insertTechStack(tech);
      await linkTechToProject(projectId, techId);
    }

    res.status(201).json({ message: "Project created", projectId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating project" });
  }
};

exports.putProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, role, demo_link, github_link, techStack } =
      req.body;

    const image_url = req.file ? req.file.path : null;

    // 1. ตรวจสอบว่า project มีอยู่หรือไม่
    const [existing] = await db.query(`SELECT * FROM projects WHERE id = ?`, [
      id,
    ]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // 2. อัปเดตข้อมูลโปรเจกต์
    const updateQuery = `
            UPDATE projects 
            SET title = ?, description = ?, role = ?, demo_link = ?, github_link = ?${image_url ? `, image_url = ?` : ""
      }
            WHERE id = ?
        `;

    const updateParams = image_url
      ? [title, description, role, demo_link, github_link, image_url, id]
      : [title, description, role, demo_link, github_link, id];

    await db.query(updateQuery, updateParams);

    // 3. ลบ tech ที่เคยลิงก์ไว้ก่อน
    await db.query(`DELETE FROM project_tech WHERE project_id = ?`, [id]);

    // 4. เพิ่ม techStack ใหม่
    const techs = JSON.parse(techStack);
    for (const tech of techs) {
      const techId = await insertTechStack(tech);
      await linkTechToProject(id, techId);
    }

    res.json({
      success: true,
      message: "Project updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to update project",
      error: err.message,
    });
  }
};

exports.deleteProjects = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Project ID is required",
    });
  }

  try {
    // คำสั่ง SQL สำหรับลบโปรเจกต์จากฐานข้อมูล
    const query = "DELETE FROM projects WHERE id = ?";
    const result = await db.query(query, [id]);
    if (result) {
      res.json({ message: "Project deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Project not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the project",
    });
  }
};
