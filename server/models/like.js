const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = Schema({
  publicationId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Publication",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Like", LikeSchema);
