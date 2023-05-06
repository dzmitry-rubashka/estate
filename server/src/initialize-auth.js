const passport = require("passport");
const config = require("config");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passportVariables = config.get("passport");
const session = require("express-session");
const JsonStore = require("express-session-json")(session);
const { Agent } = require("../src/models");
const sessionVariables = config.get("session");
const URL = config.get("backendUrl");

function initialize() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: passportVariables.clientId,
        clientSecret: passportVariables.clientSecret,
        callbackURL: `${URL}/api/auth/login/google/redirect`,
        scope: ["https://www.googleapis.com/auth/userinfo.email"],
      },
      async (token, secretToken, profile, done) => {
        const user = await Agent.findOne({
          where: { email: profile.emails[0].value },
        });
        if (user === undefined) return done(null, false, user);
        return done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    return done(null, user);
  });

  const sessionMiddleware = session({
    secret: sessionVariables.sessionKey,
    name: "session",
    resave: false,
    saveUninitialized: true,
    store: new JsonStore(),
    cookie: {},
  });
  const authMiddleware = passport.initialize();
  passport.session();

  return [sessionMiddleware, authMiddleware];
}

module.exports = initialize;
