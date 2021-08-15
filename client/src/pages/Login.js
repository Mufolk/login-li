import React, { useContext, useState } from "react";
import { Button, Form, Header, Grid, Icon } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import { useForm } from "../utils/hooks";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const initialState = {
    username: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(registerUser, initialState);

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    //Variables may be equal to values because is formatted on graphql data like
    variables: values,
  });

  function registerUser() {
    loginUser();
  }

  return (
    <div>
      <Grid className>
        <Grid.Row centered>
          <Grid.Column>
            <Form
              inverted
              onSubmit={onSubmit}
              noValidate
              className={loading ? "loading" : "login-form"}
            >
              <Header as="h1" inverted style={{ marginBottom: 30 }}>
                <Grid columns={3}>
                  <Grid.Column as={Link} to="/">
                    <Icon
                      name="arrow alternate circle left"
                      style={{ fontSize: 40 }}
                    ></Icon>
                  </Grid.Column>
                  <Grid.Column style={{ fontSize: 40 }}>Login</Grid.Column>
                </Grid>
              </Header>
              <Form.Input
                inverted
                label="Username"
                placeholder="Username..."
                name="username"
                type="text"
                value={values.username}
                error={errors.username ? true : false}
                onChange={onChange}
              />
              <Form.Input
                inverted
                label="Password"
                placeholder="Password..."
                name="password"
                type="password"
                value={values.password}
                error={errors.password ? true : false}
                onChange={onChange}
              />
              <Button type="submit" primary>
                Login
              </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
              <div className="ui error message">
                <ul className="list">
                  {Object.values(errors).map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
