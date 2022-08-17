const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../../.env" });

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/devask", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
