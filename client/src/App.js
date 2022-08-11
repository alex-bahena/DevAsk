// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Button } from "semantic-ui-react"
import { ApolloProvider} from "@apollo/client"
import client from "./config/apollo"

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


