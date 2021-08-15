const { AuthenticationError } = require("apollo-server");

const Entity = require("../../models/Entity");
const checkAuth = require("../../util/check.auth");

module.exports = {
  Mutation: {
    async createEntity(_, { someFeat }, context) {
      if (someFeat.trim() === "") {
        throw new Error("SomeFeat must not be empty");
      }

      const newEntity = new Entity({
        someFeat,
        createdAt: new Date().toISOString(),
      });

      const entity = await newEntity.save();

      return entity;
    },
    async deleteEntity(_, { entityId }, context) {
      const user = checkAuth(context);

      try {
        const entity = await Entity.findById(entityId);
        if (user.username === entity.username) {
          await entity.delete();
          return "Entity deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
