const { UserInputError } = require("apollo-server-express");
const userController = require("../controllers/user")

const resolvers = {
    Query: {
        getUser: () => {
            userController.getUser()
        }
    },

    Mutation: {
        register: (_, { input }) => {
            userController.register(input)
        },
        login: (_, { input }) => { userController.login(input) }
    }
}

module.exports = resolvers