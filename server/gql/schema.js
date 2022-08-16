const { gql } = require("apollo-server-express")


const typeDefs = gql`
    type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createdAt: String
    }

    type Token{
    token: String
    }

    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input UserUpdateInput {
    name: String
    email: String
    currentPassword: String
    newPassword: String
    siteWeb: String
    description: String
  }

    type Query{
    # user
<<<<<<< HEAD
    getUser: User
=======
    getUser(id: ID, username: String): User
    search(search: String): [User]
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
    }

    type Mutation {
    #user
    register(input: UserInput): User
    login(input: LoginInput): Token
<<<<<<< HEAD
=======
    updateAvatar(file: Upload!): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUpdateInput): Boolean

    #Follow
    follow(username: String!): Boolean



>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
    }

    
`;
module.exports = typeDefs