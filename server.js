const compression = require('compression');
const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const config = JSON.parse(fs.readFileSync('./server/config.json'));

app.set('view engine', 'ejs');
app.use(compression());
app.use('/client', express.static('client'));

require('./server/routes.js')(app);

http.listen(config.port, function () {

    console.log('listening on: ' + config.port);

});