import Vote from "../models/Vote"
import { ulid } from "ulid";

export const createVote = (userId: any, choice: any) => {
  return Vote.query().insert({
    id: ulid(),
    userId,
    choice
  })
}

export const getProjectVotes = (projectId: string) => {
  return Vote.query().where({ projectId });
}