import { gql } from "mercurius-codegen";

export default gql`
  type Query {
    project(id: Int!): Project
  }

  type Project {
    title: String,
    canEdit: Boolean
    requiredVotes: Int
    options: [String]
    vote: String
    votes: [Vote]
  }

  type Vote {
    userId: String
    choice: String
  }

  type Mutation {
    post(options: [String]): Project
  }
`;
