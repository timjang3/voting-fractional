import { updateProject } from "./controllers/project";
import { getProjectVotes, createVote } from "./controllers/votes"
import { Resolvers } from "./graphql/__generated__"

let flexOptions:any = ["Option 1"]
const resolvers: Resolvers<{ userId?: string, options?: string[] }> = {
  Query: {
    project: async(_, { id }, { userId }) => {
      const votes = await getProjectVotes("1");
      return {
        title: "Let's decide",
        canEdit: userId === "1",
        requiredVotes: 10,
        options: flexOptions,
        vote: "Option 1",
        votes,
      }
    }
  },

  Mutation:{
    post: async(_, { options }) => {
      //await updateProject(options);

      flexOptions = options;
      return {
        options: options
      }
    },

    // addVote: async(_, { votes }) => {
    //   // let userId = votes.userId;
    //   // let choice = votes.choice;
    //   console.log(votes)
    //   //await createVote(userId, choice);

    //   return {
    //     votes: votes
    //   }
    // }
  }
}

export default resolvers