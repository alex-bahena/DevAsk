const { UserInputError } = require("apollo-server-express");
const User = require("../models/user")
const bcryptjs = require("bcryptjs")
const userController = require ("../controllers/user")

const resolvers = {
    Query: {
        getUser: () => {
            

            userController.getUser()
        }
    },

    Mutation: {
        //user
        register:  (_,{input}) => {
           

            userController.register(input)
        },
        login: (_,{input} )=> {userController.login(input)}
    }
}

module.exports = resolvers