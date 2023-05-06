const nodemailer = require("nodemailer");
const config = require("config");
const smtpConfig = config.get("smtp");

module.exports = function sendEmail(
  agentEmail,
  userName,
  userEmail,
  userPhone,
  propertyTitle,
  propertyId,
  message
) {
  const transporter = nodemailer.createTransport(smtpConfig);

  transporter.sendMail(
    {
      from: "marikord26@gmail.com",
      to: agentEmail,
      subject: "Estate-example.com new message from user.",
      text: `
    From: ${userName} | ${userEmail}
    Phone number: ${userPhone}
    Property: ${propertyTitle} | ID:${propertyId}
    
    ${message}`,
    },
    (error, info) => {
      if (error) {
        return error;
      } else {
        return info;
      }
    }
  );
};
