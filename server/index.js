const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();
const typeDefs = require("./gql/schema");
const { graphqlUploadExpress } = require("graphql-upload")
const jwt = require("jsonwebtoken")
const resolvers = require("./gql/resolver");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
<<<<<<< HEAD
    const token = req.headers.authorization;
=======
    const token = req.headers.authorization.split(' ')[1];

>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
    if (token) {
      try {
        const user = jwt.verify(
          token.replace("Bearer " || "Token ", ""),
          process.env.SECRET_KEY_URI || SECRET_KEY
        );
        return {
          user,
        };
      } catch (error) {
        console.log("===ERROR===");
        console.log(error);
        throw new Error("Invalid Token");
      }
    }
  },
  csrfPrevention: true,
  cache: "bounded",
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  const app = express();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });
  await db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
