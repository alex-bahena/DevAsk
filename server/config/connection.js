const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../../.env" });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devask", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
