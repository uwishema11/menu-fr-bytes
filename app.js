
const express = require('express');
const morgan = require('morgan');
const restourantRoute = require('./routers/restourantRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/v1/restaurant', restourantRoute);



module.exports = app