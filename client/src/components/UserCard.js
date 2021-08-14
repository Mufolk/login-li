import React from "react";
import { Card, Icon } from "semantic-ui-react";
import moment from "moment";

function UserCard({ user: { username, email, createdAt } }) {
  return (
    <Card>
      <Card.Content header={username} />
      <Card.Content description={email} />
      <Card.Content extra>
        <p>
          <Icon name="stopwatch" /> Registered {moment(createdAt).fromNow(true)}{" "}
          Ago
        </p>
      </Card.Content>
    </Card>
  );
}

export default UserCard;
