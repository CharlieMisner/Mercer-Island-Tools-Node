var email   = require("emailjs/email");

exports.sendEmail = function(request, response) {
    var server  = email.server.connect({
       user:    "charliemisner@gmail.com", 
       password:"bepswbegakxvlbsw", 
       host:    "smtp.gmail.com", 
       ssl:     true
    });
    
    var message = {
       text:    "i hope this works", 
       from:    "you <username@your-email.com>", 
       to:      "<charlie.misner@mercergov.org>",
       cc:      "",
       subject: "testing emailjs",
       attachment: 
       [
          {data:"<html>this <i>is</i> a test!</html>", alternative:true}
       ]
    };
    console.log('Sent Email');
    server.send(message, function(err, message) { console.log(err || message); });
    return response.send('success')
}

