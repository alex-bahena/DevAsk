// const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();
const typeDefs = require("./gql/schema");
const { graphqlUploadExpress } = require("graphql-upload");
const jwt = require("jsonwebtoken");
const resolvers = require("./gql/resolver");
const db = require("./config/connection");
const path = require("path");
const PORT = process.env.PORT || 3001;
require("dotenv").config({ path: ".env" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // csrfPrevention: true,
  // cache: "bounded",
  context: ({ req }) => {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      console.log(token);
      try {
        const user = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRET_KEY || process.env.SECRET_KEY_URI
        );
        return {
          user,
        };
      } catch (error) {
        console.log("=== ERROR ===");
        console.log(error);
        throw new Error("Invalid Token");
      }
    }
  },
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
