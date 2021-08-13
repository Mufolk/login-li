const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  type Query {
    sayHi: String!
    getUsers: [User]
  }

  type Entity {
    id: ID!
    someFeat: String!
    anotherFeat: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createEntity(someFeat: String!): Entity!
    deleteEntity(entityId: ID!): Entity!
  }

  type Subscription {
    newEntity: Entity!
  }
`;
