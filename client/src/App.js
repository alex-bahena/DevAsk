// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Button } from "semantic-ui-react"
import { ApolloProvider} from "@apollo/client"
import client from "./config/apollo"
import Auth from "./pages/Auth";
import { getToken, decodeToken, removeToken } from "./utils/token";

const logout = () => {
  removeToken();
  setAuth(null);
};

const setUser = (user) => {
  setAuth(user);
};

const authData = useMemo(
  () => ({
    auth,
    logout,
    setUser,
  }),
  [auth]
);

export default function App() {
  return (
    <ApolloProvider client={client} >
    <div className="app">
      <h1>estamos en app</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>

    </ApolloProvider>
  );
}


