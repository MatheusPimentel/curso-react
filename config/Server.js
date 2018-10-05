const express = require("express");
require("../src/utils/PassportGoogle");

const app = express();
require("../src/routes/authRoutes")(app);
module.exports = app;
