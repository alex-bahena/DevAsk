<<<<<<< HEAD
import { ApolloClient, InMemoryCache } from "@apollo/client";
=======
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
import { getToken } from "../utils/token";

const httpLink = createUploadLink({
<<<<<<< HEAD
  uri: "http//localhost:3001",
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      //adding headers data.
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
=======
  uri: "http://localhost:3001/graphql",
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
<<<<<<< HEAD
=======
  // link: httpLink
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6
  link: authLink.concat(httpLink),
});

export default client;
