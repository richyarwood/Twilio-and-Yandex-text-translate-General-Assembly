# Twilio Translate Challenge

Using [Twilio's _Programmable SMS_ product](https://www.twilio.com/docs/sms), and the [_Yandex_ translate API](https://tech.yandex.com/translate/), we created a web service that will allow a user to send an SMS to a phone number, whilst at the same time translating the message into another language.

The application produces a single endpoint `/message` which handles the following data:

```json
{
  "message": "Hello World!",
  "lang": "fr",
  "tel": "00447777123456"
}
```

This instructs the service to translate a message into another language, before sending the translation to the number via SMS.

Once it has translated the message and sent the SMS, it returns the following response:

```json
{
  "message": "Translation successful. Message sent."
}
```
