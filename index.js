const express = require('express');
const sequelize = require('./config'); 
const morgan = require('morgan');
const restourantRoute = require('./routers/restourantRoute');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/v1/restaurant', restourantRoute);

// Connecting with Database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
