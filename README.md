# Twilio Translate Challenge


## The challenge

Using Twilio's _Programmable SMS_ product, and the _Yandex_ translate API, created a web service that will allow a user to send an SMS to a phone number, whilst at the same time translating the message into another language.

The application produces a single endpoint `/message` which handles the following data:

```json
{
  "message": "Hello World!",
  "lang": "fr",
  "tel": "+447777123456"
}
```

This instructs the service to translate _Hello World!_ into another language, before sending the translation to the number _+447777123456_ via SMS.

Once it has translated the message and sent the SMS, it returns the following response:

```json
{
  "message": "Translation successful. Message sent."
}
```
