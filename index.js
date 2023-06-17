
const sequelize = require('./config')
const http = require('http');
const app = require('./app')
const server = http.createServer(app);

const port = process.env.PORT || 3000;

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


server.listen(port, () =>
  console.log(`restaurant Menu Server Started & Listening on PORT: ${port}`)
);
