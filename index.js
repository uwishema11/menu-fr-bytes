
const express = require('express');
const sequelize = require('./config');

const app = express();

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

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