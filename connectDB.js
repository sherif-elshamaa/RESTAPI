const mongoose = require("mongoose");
require('dotenv').config({path: './config.env'});


async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;