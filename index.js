require('dotenv').config() // Imports the .env file but is not sent to github

const express = require('express') // This provides framework for our API
const bodyParser = require('body-parser') // Make req.body
const rp = require('request-promise') // Request promise for server-side request to twilio
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN) // Twilio authentication

const app = express() // Loads express

app.get('/', (req, res) => res.json({ message: 'You are on the Twilio translater api'}))

app.use(bodyParser.json()) //Middleware which parses request to JSON

function message(req, res){

  // This is the POST function which sends a translation request to Yandex
  rp({
    method: 'POST',
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.YANDEX_API_KEY}&text=${req.body.text}&lang=${req.body.lang}`, // `process` means this current app.
    json: true
  })

  // Once we have a response from Yandex, Twilio message.create is called and uses the response.text from Yandex as the message body. Named 'response' to differentiate from the initial message 'res' above

    .then(response => { //This is the Yandex response
      return twilio.messages.create({
        body: response.text, //This is translation from Yandex
        to: req.body.tel,  // This is from the original API POST request
        from: '+447447988117' // Hard-coded Twilio trial number
      })
    })

    .then(() => res.json({ message: 'Translation successful, message sent' }))
}

app.post('/message', message)

app.listen(4000, () => console.log('We are listening on port 4000'))
