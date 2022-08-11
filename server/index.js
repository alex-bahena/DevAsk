const mongoose = require("mongoose");

const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;



const url =
  "mongodb+srv://testUser:Holajavi1@cluster0.ajcc3kn.mongodb.net/?retryWrites=true&w=majority";
var MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let _db;

const mongoConnect = (callback) => {
  client
    .connect()
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);

