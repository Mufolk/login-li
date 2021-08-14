import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid, Header } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import UserCard from "../components/UserCard";
import Presentation from "../components/Presentation";

function Home() {
  const { loading, data } = useQuery(FETCH_USERS_QUERY);
  const { user } = useContext(AuthContext);

  const homePage = user ? (
    <Grid stackable>
      <Grid.Row>
        <Header inverted as="h1" style={{ marginLeft: 10 }}>
          Hello, welcome {user.username}
        </Header>
      </Grid.Row>
      <Grid.Row columns={3}>
        {loading ? (
          <Header as="h3">Loading newest users</Header>
        ) : (
          data.getUsers &&
          data.getUsers.map((user) => (
            <Grid.Column key={user.id} style={{ marginBottom: 20 }}>
              <UserCard user={user} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  ) : (
    //   <Menu secondary stackable size="massive" color="teal">
    //     <Menu.Menu position="center">
    //       <Menu.Item
    //         name="login"
    //         active={activeItem === "login"}
    //         onClick={handleItemClick}
    //         as={Link}
    //         to="/login"
    //       >
    //         Login
    //         <Icon name="sign-in" style={{ marginLeft: 5 }} />
    //       </Menu.Item>
    //       <Menu.Item
    //         name="register"
    //         active={activeItem === "register"}
    //         onClick={handleItemClick}
    //         as={Link}
    //         to="/register"
    //       >
    //         Register
    //         <Icon name="signup" style={{ marginLeft: 5 }} />
    //       </Menu.Item>
    //     </Menu.Menu>
    //   </Menu>
    //   <Button type="submit" primary>
    //   Login
    // </Button>
    <Presentation />
  );

  return homePage;
}

const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      id
      username
      email
      createdAt
    }
  }
`;

export default Home;
