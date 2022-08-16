// const { UserInputError } = require("apollo-server-express");
const userController = require("../controllers/user");
const { GraphQLUpload } = require("graphql-upload")
// const user = require("../models/user");

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        getUser: (_, { id, username }) => { return userController.getUser(id, username) }
    },

    Mutation: {
        register: (_, { input }) => { userController.register(input) },
        login: (_, { input }) => { return userController.login(input) },
        updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
        deleteAvatar: (_, { }, ctx) => userController.deleteAvatar(ctx),
        updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),
    }
}

module.exports = resolvers