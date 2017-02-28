const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

var routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../City-of-Mercer-Island-Internal-Tools/dist')));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../City-of-Mercer-Island-Internal-Tools/dist/index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on localhost:${port}`));