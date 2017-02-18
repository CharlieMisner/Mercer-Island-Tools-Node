var email   = require("emailjs/email");

var functions = {
    sendEmail: function() {
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
        server.send(message, function(err, message) { console.log(err || message); });
    }
}
   
// send the message and get a callback with an error or details of the message that was sent
