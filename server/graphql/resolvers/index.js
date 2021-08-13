const usersResolvers = require("./users");
const entityResolvers = require("./entity");

module.exports = {
  Query: {
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...entityResolvers.Mutation,
  },
  Subscription: {
    ...entityResolvers.Subscription,
  },
};
