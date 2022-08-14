import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLik = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: httpLik
});

export default client;
