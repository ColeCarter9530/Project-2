const sequelize = require('../config/connection');
const User = require('')
const userData = require('./userData.json');
const productData = require('./productData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();