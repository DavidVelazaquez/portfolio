const MongoLib = require("../mongo/mongo");

class ProjectsService {
  constructor() {
    this.collection = "portfolio-projects";
    this.mongoDb = new MongoLib();
  }

  async getProjects({ tags }) {
    const query = tags && { tags: { $in: tags } };

    const projects = await this.mongoDb.getAllProjects(this.collection, query);
    return projects || [];
  }

  async createProject({ project }) {
    const createdProduct = await this.mongoDb.create(this.collection, {
      project
    });
    return createdProduct;
  }

  async deleteProject({ projectId }) {
    const deletedProjectId = await this.mongoDb.delete(
      this.collection,
      projectId
    );
    return deletedProjectId;
  }
}

module.exports = ProjectsService;
