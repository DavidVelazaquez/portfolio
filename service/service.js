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
}

module.exports = ProjectsService;
