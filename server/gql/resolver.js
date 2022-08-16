const { UserInputError } = require("apollo-server-express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const userController = require("../controllers/user");
<<<<<<< HEAD

const resolvers = {
  Query: {
    getUser: (_, { id, username }) => userController.getUser(id, username),
  },
  Mutation: {
    //user
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    // updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
  },
};

module.exports = resolvers;
=======
const { GraphQLUpload } = require("graphql-upload")
const followController = require("../controllers/follow");
// const user = require("../models/user");

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        getUser: (_, { id, username }) => { return userController.getUser(id, username) },
        search: (_, { search }) => userController.search(search),
    },

    Mutation: {
        register: (_, { input }) => { userController.register(input) },
        login: (_, { input }) => { return userController.login(input) },
        updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
        deleteAvatar: (_, { }, ctx) => userController.deleteAvatar(ctx),
        updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),

        //Follow
        follow: (_, { username }, ctx) => followController.follow(username, ctx),
    }
}

module.exports = resolvers
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
