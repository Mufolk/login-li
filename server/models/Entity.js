const { model, Schema } = require("mongoose");

const entitySchema = new Schema({
  someFeat: String,
  anotherFeat: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Entity", entitySchema);
