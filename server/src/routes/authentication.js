const { Router } = require("express");
const passport = require("passport");
const config = require("config");

const URL = config.get("frontendUrl");

module.exports = Router()
  .get("/login/google", passport.authenticate("google"))
  .get(
    "/login/google/redirect",
    passport.authenticate("google", {
      successRedirect: `${URL}/#/properties/`,
      failureRedirect: `${URL}/#/`,
    })
  )
  .get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
    });
    return res.redirect(`${URL}/#/`);
  });
