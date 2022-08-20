// const { AuthenticationError } = require("apollo-server-express");
const userController = require("../controllers/user");
const { GraphQLUpload } = require("graphql-upload");
const followController = require("../controllers/follow");
const publicationController = require("../controllers/publication");
// const user = require("../models/user");

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getUser: (_, { id, username }) => {
      return userController.getUser(id, username);
    },
    search: (_, { search }) => userController.search(search),

    //FOLLOW
    isFollow: (_, { username }, ctx) =>
      followController.isFollow(username, ctx),
    getFollowers: (_, { username }) => followController.getFollowers(username),
  },

  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
    deleteAvatar: (_, {}, ctx) => userController.deleteAvatar(ctx),
    updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),

    // Follow
    follow: (_, { username }, ctx) => followController.follow(username, ctx),
    unFollow: (_, { username }, ctx) =>
      followController.unFollow(username, ctx),

    // Publication
    publish: (_, { file }, ctx) => publicationController.publish(file, ctx),
  },
};

module.exports = resolvers;
