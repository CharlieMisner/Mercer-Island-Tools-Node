var email = require("./node_modules/emailjs/email.js")

var server 	= email.server.connect({
   user:	"charlie.misner@mercergov.org", 
   password:"Laxduk8!", 
   host:	"smtp.office365.com",
   port: 587,
   tls: {ciphers: "SSLv3"}
});
 
var message	= {
   text:	"i hope this works", 
   from:	"charlie.misner@mercergov.org", 
   to:		"charliemisner@gmail.com",
   cc:		"charlie.misner@napior.com",
   subject:	"testing emailjs",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true}
   ]
};
 
// send the message and get a callback with an error or details of the message that was sent 
server.send(message, function(err, message) { console.log(err || message); });