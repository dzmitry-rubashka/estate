const express = require("express");
const config = require("config");
const passportInit = require("./initialize-auth.js");
const routes = require("./routes/");
const db = require("../src/models/index.js");

const PORT = config.get("port");

express()
  .use(express.json())
  .use(passportInit())
  .use("/api", routes)
  .use("/", express.static("./public"))
  .use("/admin", express.static("./public/admin"))
  .listen(PORT, () => console.log(`Server started at :${PORT}`));
