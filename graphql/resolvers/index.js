const usersResolvers = require("./users");

module.exports = {
  Query: {
    sayHi: () => "Hello World!",
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
