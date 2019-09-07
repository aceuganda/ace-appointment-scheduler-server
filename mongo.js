var mongoose = require("mongoose");

var config = require("dotenv").config();
module.exports = () => {
  var envUrl = process.env.MONGODB_URI;
  var localUrl = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.host}/${process.env.database}?retryWrites=true&w=majority`;
  var mongoUrl = envUrl ? envUrl : localUrl;
  console.log(mongoUrl);
  return mongoose.connect(mongoUrl);
};
