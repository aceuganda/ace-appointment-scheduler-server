var mongoose = require("mongoose");

var config = require("dotenv").config();
module.exports = () => {
  var envUrl = process.env.MONGODB_URI;
  var localUrl = `mongodb+srv://${config.parsed.username}:${config.parsed.password}@${config.parsed.host}/${config.parsed.database}?retryWrites=true&w=majority`;
  var mongoUrl = envUrl ? envUrl : localUrl;
  console.log(mongoUrl);
  return mongoose.connect(mongoUrl);
};
