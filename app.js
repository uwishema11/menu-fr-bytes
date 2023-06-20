
const express = require('express');
const morgan = require('morgan');
const restourantRoute = require('./routers/restourantRoute');
const addressesRoute = require('./routers/addressRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/v1/restaurant', restourantRoute);
app.use('/api/v1/address', addressesRoute);



module.exports = app