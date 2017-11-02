import createHtml from "./createHtml";
import sgMail from "@sendgrid/mail";
import config from "./config.json";

const senderEmail = "stocktveld@gmail.com";

const createMailOptions = ({ to, subject, html }) => ({
  to: [senderEmail, to],
  from: senderEmail,
  subject,
  html
});

const sendMail = ({ options }) =>
  new Promise((resolve, reject) => {
    createTransporter().sendMail(options, (error, info) => {
      if (error) {
        if (typeof error === "object") {
          console.log(JSON.stringify(error));
          reject(JSON.stringify(error));
        } else {
          console.log(error);
          reject(error);
        }
      } else {
        console.log("Message sent: " + info.response);
        resolve(info.response);
      }
    });
  });

export default ({ email, firstName, lastName, date }) => {
  if (email) {
    const subject = `Bedankt voor je inschrijving ${firstName}!`;
    const html = createHtml({ firstName, date });

    const msg = createMailOptions({ to: email, subject, html });

    sgMail.setApiKey(config.SENDGRID_API_KEY);

    return Promise.resolve(sgMail.send(msg));
  } else {
    return Promise.resolve();
  }
};
