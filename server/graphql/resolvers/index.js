const usersResolvers = require("./users");
const entityResolvers = require("./entity");

module.exports = {
  Query: {
    sayHi: () => "Hello World!",
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...entityResolvers.Mutation,
  },
  Subscription: {
    ...entityResolvers.Subscription,
  },
};
