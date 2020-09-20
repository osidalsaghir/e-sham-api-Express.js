const express = require("express");
const consign = require("consign");
const app = express();


consign({ cwd: process.cwd() + "/src" })
  .include("app/Controllers")
  .then("routes")
  .into(app);

module.exports = app;
