const { Router } = require("express");
const hello = require("./hello.js");
const status = require("./status.js");
const properties = require("./properties.js");
const authentication = require("./authentication.js");

module.exports = Router()
  .get("/status", status)
  .post("/hello", hello)
  .use("/properties", properties)
  .use("/auth", authentication);
