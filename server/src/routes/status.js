const config = require("config");

module.exports = function (req, res) {
  try {
    if (req.session.passport === undefined) {
      return res.status(200).json({
        status: "not authenticated",
        URL: config.get("backendUrl"),
      });
    }
    return res.status(200).json({
      status: "authenticated",
      agent: req.session.passport.user,
      URL: config.get("backendUrl"),
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
