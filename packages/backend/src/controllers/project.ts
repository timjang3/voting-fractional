import Project from "../models/Project"
import { ulid } from "ulid";

export const updateProject = (options: string[]) => {
  return Project.query().update({
    options:options
  })
}