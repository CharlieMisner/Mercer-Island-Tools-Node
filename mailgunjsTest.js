var api_key = 'key-11dbb88fd203333af892beaa9f408005';
var domain = 'sandboxf29bbdf6a07246b8b96099d769e570d5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'charlie.misner@mercergov.org',
  to: 'charliemisner@gmail.com, charlie.misner@mercergov.org',
  subject: 'DSG Mailgun Test',
  html: `
  <p>This is a</p> 
  <p><b>test</b></p>
  <p>of backticks</p>`
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});