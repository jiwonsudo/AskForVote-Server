"use strict";

const express = require("express");
const app = express();

const home = require("./routes/home")

app.use("/", home);

module.exports = app;

