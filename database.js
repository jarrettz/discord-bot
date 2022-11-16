const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
});

const Account = require('./models/Account')(sequelize, Sequelize.DataTypes);
const AccountPermissions = require('./models/AccountPermissions')(sequelize, Sequelize.DataTypes);
const AdministratorUser = require('./models/AdministratorUser')(sequelize, Sequelize.DataTypes);
const BookingConfirmation = require('./models/BookingConfirmation')(sequelize, Sequelize.DataTypes);
const CustomerLoyaltyRole = require('./models/CustomerLoyaltyRole')(sequelize, Sequelize.DataTypes);
const Device = require('./models/Device')(sequelize, Sequelize.DataTypes);
const FloorPlan = require('./models/FloorPlan')(sequelize, Sequelize.DataTypes);
const Food = require('./models/Food')(sequelize, Sequelize.DataTypes);
const FoodForFoodMenu = require('./models/FoodForFoodMenu')(sequelize, Sequelize.DataTypes);
const FoodMenu = require('./models/FoodMenu')(sequelize, Sequelize.DataTypes);
const FoodMenuCaterer = require('./models/FoodMenuCaterer')(sequelize, Sequelize.DataTypes);
const FoodSchedule = require('./models/FoodSchedule')(sequelize, Sequelize.DataTypes);
const Hotel = require('./models/Hotel')(sequelize, Sequelize.DataTypes);
const HotelRoom = require('./models/HotelRoom')(sequelize, Sequelize.DataTypes);
const IndependentCaterer = require('./models/IndependentCaterer')(sequelize, Sequelize.DataTypes);
const Location = require('./models/Location')(sequelize, Sequelize.DataTypes);
const Menu = require('./models/Menu')(sequelize, Sequelize.DataTypes);
const PaymentType = require('./models/PaymentType')(sequelize, Sequelize.DataTypes);
const Permission = require('./models/Permission')(sequelize, Sequelize.DataTypes);
const RegisteredUser = require('./models/RegisteredUser')(sequelize, Sequelize.DataTypes);
const RegUserPayment = require('./models/RegUserPayment')(sequelize, Sequelize.DataTypes);
const Reward = require('./models/Reward')(sequelize, Sequelize.DataTypes);
const RoomBlock = require('./models/RoomBlock')(sequelize, Sequelize.DataTypes);
const Schedule = require('./models/Schedule')(sequelize, Sequelize.DataTypes);
const User = require('./models/User')(sequelize, Sequelize.DataTypes);

module.exports = { 
  Account, 
  AccountPermissions, 
  AdministratorUser, 
  BookingConfirmation, 
  CustomerLoyaltyRole,
  Device,
  FloorPlan,
  Food,
  FoodForFoodMenu,
  FoodMenu,
  FoodMenuCaterer,
  FoodSchedule,
  Hotel,
  HotelRoom,
  IndependentCaterer,
  Location,
  Menu,
  PaymentType,
  Permission,
  RegisteredUser,
  RegUserPayment,
  Reward,
  RoomBlock,
  Schedule,
  User
};
