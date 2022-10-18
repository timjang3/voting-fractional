import { Model } from "objection";

class Project extends Model {
  static tableName = "project";

  title!: string;

  canEdit!: string;

  requiredVotes!: string;

  options!: string[];

  vote!: string;

  votes!: string[];
}

export default Project;
