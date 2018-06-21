'use strict';

const express = require('express');
const parser  = require('body-parser');
const server  = express();
const config  = require('./config');

server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));

const routes = {
    home: require('./routes/home'),
    sms: require('./routes/sms'),
    voice: require('./routes/voice')
};

server.use('/', routes.home);
server.use('/sms', routes.sms);
server.use('/voice', routes.voice);

server.listen(config.server.port, () => {
    console.log('server is up');
});