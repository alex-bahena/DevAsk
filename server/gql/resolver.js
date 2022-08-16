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
    }
}

module.exports = resolvers