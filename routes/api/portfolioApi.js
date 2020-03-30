const express = require("express");
const router = express.Router();

const ProjectsService = require("../../service/service");

const projectsService = new ProjectsService();

router.get("/projects", async (req, res, next) => {
  const { tags } = req.query;
  try {
    const projects = await projectsService.getProjects({ tags });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { body: project } = req;
  console.log(req.body);
  try {
    const newProject = await projectsService.createProject({ project });
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
});

router.delete("/:projectId", async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const projectDeleted = await projectsService.deleteProject({ projectId });
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
