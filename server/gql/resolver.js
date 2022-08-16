const { UserInputError } = require("apollo-server-express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const userController = require("../controllers/user");

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
