/* eslint-disable import/prefer-default-export */
require('dotenv').config({ path: `.env` });

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const successCode = 200;
const errorCode = 400;

// Connect to the Mailgun API
const mailgun = require('mailgun-js');

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

// Netlify function
export function handler(event, context, callback) {
  const data = JSON.parse(event.body);
  const { name, email, message } = data;
  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.MY_EMAIL_ADDRESS,
    replyTo: email,
    text: `${message}`,
  };

  // MailGun code
  // eslint-disable-next-line func-names
  mg.messages().send(mailOptions, function (error, body) {
    if (error) {
      callback(null, {
        statusCode: errorCode,
        headers,
        body: JSON.stringify(error),
      });
    } else {
      callback(null, {
        statusCode: successCode,
        headers,
        body: JSON.stringify(body),
      });
    }
  });
}
