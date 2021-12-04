const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userSeeds.json');

const seedDatabase = async () => {
  try{

    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
    process.exit(0);
  } catch(err){
    console.log(err)
  }
};

seedDatabase();