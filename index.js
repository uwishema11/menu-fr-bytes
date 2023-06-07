

const sequelize = require('./config');

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();
