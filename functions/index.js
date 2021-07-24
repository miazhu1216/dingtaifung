const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

const {email, password} = require('./config');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = 'DingTaiFung';

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order){
  const mailOptions = {
    from: `${APP_NAME} <noreply@sliceline.com`,
    to: order.email,
    subject: `Your order from ${APP_NAME}.`,
    html: `
      <table style="width:500px; margin: auto"> 
        <tr>
            <th>${order.displayName}</th>
            <th>You ordered some food, here's confirmation of that order. </th>
        </tr>
        ${order.order.map(({name, quantity, price}) => `
          <tr>
            <td>
              ${quantity}
            </td>            
            <td>
              ${name}
            </td>  
            <td>
              ${price}
            </td>
          </tr>
        `).join("")}
      </table>
    `
  };
  mailTransport.sendMail(mailOptions);
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
