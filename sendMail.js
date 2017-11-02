// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from "@sendgrid/mail";
import config from "./config.json";

sgMail.setApiKey(config.SENDGRID_API_KEY);

const msg = {
  to: "test@example.com",
  from: "test@example.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
sgMail.send(msg);
