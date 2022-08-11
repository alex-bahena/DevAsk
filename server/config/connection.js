const mongoose = require('mongoose');
// require('dotenv').config();
const path = require('path')
require("dotenv").config({path: ".env"})
// require('dotenv').config({ 
//    path: path.resolve(__dirname, '../../.env') 
// })



mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://testUser:Holajavi1@cluster0.ajcc3kn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//mongoose.connect(
  //     process.env.BBDD,
  //      {
  //     userNewUrlParser: true,
  //     userUnifiedTopology: true,
  //     userFindAndModify: true,
  //     useCreateIndex: true
  // },
  // (err,_) =>{
  //     if(err){
  //         console.log("error de conexion");
  //     } else {
  //         console.log("conexion correcta");
  //             server()
  //     }
  // }
  // )



module.exports = mongoose.connection;

//"mongodb+srv://testUser:Holajavi1@cluster0.ajcc3kn.mongodb.net/?retryWrites=true&w=majority",