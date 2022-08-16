import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TerminalIcon } from '@heroicons/react/solid'
import "./Header.scss";
import RightHeader from "./RightHeader";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className="header__logo">
            <Link to="/">
              <TerminalIcon className="devask" />
            </Link>
            <p className="devask-name">devask</p>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>Search Bar</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <RightHeader />
          </Grid.Column>
        </Grid>
      </Container >
    </div >
  );
}

