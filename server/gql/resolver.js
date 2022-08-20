const userController = require("../controllers/user");
const followController = require("../controllers/follow");
const publicationController = require("../controllers/publication");
const { GraphQLUpload } = require("graphql-upload")

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    // User
    // getUser: (_, { id, username }) => userController.getUser(id, username),
    getUser: (_, { id, username }) => { return userController.getUser(id, username) },
    search: (_, { search }) => userController.search(search),

    // Follow
    isFollow: (_, { username }, ctx) =>
      followController.isFollow(username, ctx),
    getFollowers: (_, { username }) => followController.getFollowers(username),
    getFolloweds: (_, { username }) => followController.getFolloweds(username),
    getNotFolloweds: (_, { }, ctx) => followController.getNotFolloweds(ctx),

    // Publication
    getPublications: (_, { username }) =>
      publicationController.getPublications(username),
    getPublicationsFolloweds: (_, { }, ctx) =>
      publicationController.getPublicationsFolloweds(ctx),
  },
  Mutation: {
    // User
    register: (_, { input }) => { userController.register(input) },
    // login: (_, { input }) => userController.login(input),
    login: (_, { input }) => { return userController.login(input) },
    updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
    deleteAvatar: (_, { }, ctx) => userController.deleteAvatar(ctx),
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
