const fs = require("fs");
const path = require("path");

module.exports = function logMessage(message) {
  try {
    function writeBlank() {
      fs.writeFile(
        path.resolve(__dirname, "../logs/messages.json"),
        "[]",
        (err) => {
          if (err) throw err;
        }
      );
    }
    let msg = message;
    if (!fs.existsSync(path.resolve(__dirname, "../logs"))) {
      fs.mkdirSync(path.resolve(__dirname, "../logs"));
      writeBlank();
    } else if (
      !fs.existsSync(path.resolve(__dirname, "../logs/messages.json"))
    ) {
      writeBlank();
    }
    fs.readFile(
      path.resolve(__dirname, "../logs/messages.json"),
      "utf8",
      function (err, data) {
        const dataJson = JSON.parse(data);
        msg.logID = dataJson.length + 1;
        dataJson.push(msg);
        fs.writeFile(
          path.resolve(__dirname, "../logs/messages.json"),
          JSON.stringify(dataJson),
          (err) => {
            if (err) throw err;
          }
        );
      }
    );
  } catch (error) {
    throw error;
  }
};
