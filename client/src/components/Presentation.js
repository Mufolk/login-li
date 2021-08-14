import React from "react";
import {
  Menu,
  Icon,
  Segment,
  Container,
  Button,
  Header,
  Grid,
  Image,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
import image from "./presentation-image.jpg";

export default function Presentation() {
  return (
    <Segment inverted vertical center aligned style={{ paddingBottom: 0 }}>
      <Menu large secondary inverted pointing>
        <Menu.Item>
          <Icon name="sidebar"></Icon>
        </Menu.Item>
        <Menu.Menu position="right" inverted style={{ marginRight: 10 }}>
          <Button inverted as={Link} to="/login">
            Login
          </Button>
          <Button inverted as={Link} to="/register">
            Register
          </Button>
        </Menu.Menu>
      </Menu>
      <Container text>
        <Header inverted style={{ textAlign: "center" }} as="h1">
          Welcome to my login App
        </Header>
        <Header
          inverted
          style={{ textAlign: "center", marginBottom: 50 }}
          as="h2"
        >
          Do whatever you want when you want to, but not here. You're only able
          to login.
        </Header>
      </Container>

      <Grid centered stackable>
        <Grid.Column
          style={{
            paddingBottom: 0,
            marginBottom: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button huge primary as={Link} to="/register">
            Get Started
            <Icon name="right arrow" color="white" style={{ marginLeft: 5 }} />
          </Button>
        </Grid.Column>
      </Grid>
      <Grid columns={2} stackable>
        <Grid.Column style={{ paddingBottom: 0 }}>
          <img src={image} class="ui image fluid image-size" />
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{ marginBottom: 10 }}>
            <Header inverted style={{ textAlign: "center" }} as="h1">
              Welcome to my login App
            </Header>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: 10 }}>
            <Header inverted style={{ textAlign: "center" }} as="h1">
              Welcome to my login App
            </Header>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: 10 }}>
            <Header inverted style={{ textAlign: "center" }} as="h1">
              Welcome to my login App
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
