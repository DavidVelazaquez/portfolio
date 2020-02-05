const express = require("express");
const router = express.Router();
const ProjectsService = require("../../service/service");

const projectsService = new ProjectsService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  try {
    const projects = await projectsService.getProjects({ tags });
    res.render("portfolio", { projects });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
