import React from "react";
import { Card, Icon } from "semantic-ui-react";

function UserCard({ user: { username, email, createdAt } }) {
  return (
    <Card fluid>
      <Card.Content header={username} />
      <Card.Content description={email} />
      <Card.Content extra>
        <Icon name="stopwatch" />
        {createdAt}
      </Card.Content>
    </Card>
  );
}

export default UserCard;
