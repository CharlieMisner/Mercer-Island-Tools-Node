var nodemailer = require('nodemailer');
// send mail with password confirmation
var transporter = nodemailer.createTransport( {
    service:  'Mailgun',
    auth: {
     user: 'postmaster@sandboxf29bbdf6a07246b8b96099d769e570d5.mailgun.org',
     pass: '6973c28abf0e503c50fd1f7c79ece6db'   
    }
});
var mailOpts = {
    from: 'charlie.misner@mercergov.org',
    to: 'charliemisner@gmail.com',
    subject: 'test subject',
    text : 'test message form mailgun',
    html : '<b>test message form mailgun</b>'
};
transporter.sendMail(mailOpts, function (err, response) {
    if (err) {
     console.log("Mail error.");
    } else {
     console.log("Mail send.");
    }
});