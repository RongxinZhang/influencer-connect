const accountSid = 'AC8e32f8c9d4c29e04c671da29dbfbf13c';
const authToken = '7ca840c22a0891247d0763cc5246690b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12056914843',
     to: '+14039913770'
   })
  .then(message => console.log(message.sid));