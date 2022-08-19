const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("Connection Error");
    } else {
      server();
    }
  }
);

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;

      if (token) {
        try {
          const user = jwt.verify(
            token.replace("Bearer ", ""),
            process.env.SECRET_KEY
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

  serverApollo.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log("================================");
    console.log(`Server running on ${url}`);
    console.log("================================");
  });
}
