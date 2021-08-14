import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

function Home() {
  const { loading, data } = useQuery(FETCH_USERS_QUERY);
  if (data === undefined) {
    return <h1>Loading</h1>;
  } else {
    console.log(data);
    return (
      <div>
        <h1>Home Page</h1>
      </div>
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
