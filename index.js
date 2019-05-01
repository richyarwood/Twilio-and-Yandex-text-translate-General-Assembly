require('dotenv').config()
const rp = require('request-promise')

// const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
//
// // twilio.messages.create({
// //   body: 'Hello from RICHARD AND CHARLOTTE',
// //   to: '+447887626453',  // Text this number
// //   from: '+447447988117' // From a valid Twilio number
// // })
// //   .then((message) => console.log(message.sid))

rp({
  method: 'POST',
  url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.YANDEX_API_KEY}&text=hello&lang=en-fr`, // `process` means this current app.
  json: true
})
  .then(res => console.log(res))
