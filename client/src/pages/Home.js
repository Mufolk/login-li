import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid, Header } from "semantic-ui-react";

import UserCard from "../components/UserCard";

function Home() {
  const { loading, data } = useQuery(FETCH_USERS_QUERY);

  return (
    <Grid stackable>
      <Grid.Row>
        <Header as="h1" style={{ marginLeft: 10 }}>
          Newest Users
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
  );
}

const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      username
      email
      createdAt
    }
  }
`;

export default Home;
