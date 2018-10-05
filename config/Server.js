const express = require("express");
const mongoose = require("mongoose");
const keys = require("./Keys");
require("../src/utils/PassportGoogle");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();
require("../src/routes/authRoutes")(app);
module.exports = app;
