import { Model } from "objection";

class Vote extends Model {
  static tableName = "vote";

  id!: string;

  projectId!: string;

  userId!: string;

  choice!: string;
}

export default Vote;
