import React, { useContext, useState } from "react";
import { Button, Form, Header, Grid } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import { useForm } from "../utils/hooks";

function Register(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { onChange, onSubmit, values } = useForm(registerUser, initialState);

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      //Errors from the graphql server
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    //Variables may be equal to values because is formatted on graphql data like
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form
              onSubmit={onSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <Header as="h1">Register</Header>
              <Form.Input
                label="Username"
                placeholder="Username..."
                name="username"
                type="text"
                value={values.username}
                error={errors.username ? true : false}
                onChange={onChange}
              />
              <Form.Input
                label="Email"
                placeholder="Email..."
                name="email"
                type="email"
                value={values.email}
                error={errors.email ? true : false}
                onChange={onChange}
              />
              <Form.Input
                label="Password"
                placeholder="Password..."
                name="password"
                type="password"
                value={values.password}
                error={errors.password ? true : false}
                onChange={onChange}
              />
              <Form.Input
                label="Confirm Password"
                placeholder="Confirm Password..."
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                error={errors.confirmPassword ? true : false}
                onChange={onChange}
              />
              <Button type="submit" primary>
                Register
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
