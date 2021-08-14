import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid, Header } from "semantic-ui-react";

function Home() {
  const {
    loading,
    data: { getUsers: users },
  } = useQuery(FETCH_USERS_QUERY);
  if (users === undefined) {
    return <h1>Loading</h1>;
  } else {
    console.log(users);
    return (
      <Grid columns={1} divided>
        <Grid.Row>
          <Header fluid as="h1">
            Newest Users
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>hey yo</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
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
