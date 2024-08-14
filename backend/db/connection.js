const mongoose = require("mongoose");

function connectionDB() {
  console.log("connection to db");
  return mongoose.connect("mongodb://127.0.0.1:27017/register");
}

module.exports = connectionDB;
