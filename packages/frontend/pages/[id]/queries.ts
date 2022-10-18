import { gql } from "@apollo/client";

export const ProjectQuery = gql`
  query Project($id: Int!) {
    project(id: $id) {
      title
      canEdit
      requiredVotes
      options
      vote
      votes {
        userId
        choice
      }
    }
  }
`;

export const ProjectMutation = gql`
  mutation Project($options: [String]) {
    post(options: $options) {
      options
    }
  }
`;

export const VoteMutation = gql`
  mutation Project($votes: [String]) {
    addVote(votes: $votes) {
      votes{
        userId
        choice
      }
    }
  }
`;