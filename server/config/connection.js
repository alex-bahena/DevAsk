const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://testUser:Holajavi1@cluster0.ajcc3kn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;