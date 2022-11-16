var DataTypes = require("sequelize").DataTypes;
var _Account = require("./Account");
var _AccountPermissions = require("./AccountPermissions");
var _AdministratorUser = require("./AdministratorUser");
var _BookingConfirmation = require("./BookingConfirmation");
var _CustomerLoyaltyRole = require("./CustomerLoyaltyRole");
var _Device = require("./Device");
var _FloorPlan = require("./FloorPlan");
var _Food = require("./Food");
var _FoodForFoodMenu = require("./FoodForFoodMenu");
var _FoodMenu = require("./FoodMenu");
var _FoodMenuCaterer = require("./FoodMenuCaterer");
var _FoodSchedule = require("./FoodSchedule");
var _Hotel = require("./Hotel");
var _HotelRoom = require("./HotelRoom");
var _IndependentCaterer = require("./IndependentCaterer");
var _Location = require("./Location");
var _Menu = require("./Menu");
var _PaymentType = require("./PaymentType");
var _Permission = require("./Permission");
var _RegUserPayment = require("./RegUserPayment");
var _RegisteredUser = require("./RegisteredUser");
var _Reward = require("./Reward");
var _RoomBlock = require("./RoomBlock");
var _Schedule = require("./Schedule");
var _User = require("./User");

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var AccountPermissions = _AccountPermissions(sequelize, DataTypes);
  var AdministratorUser = _AdministratorUser(sequelize, DataTypes);
  var BookingConfirmation = _BookingConfirmation(sequelize, DataTypes);
  var CustomerLoyaltyRole = _CustomerLoyaltyRole(sequelize, DataTypes);
  var Device = _Device(sequelize, DataTypes);
  var FloorPlan = _FloorPlan(sequelize, DataTypes);
  var Food = _Food(sequelize, DataTypes);
  var FoodForFoodMenu = _FoodForFoodMenu(sequelize, DataTypes);
  var FoodMenu = _FoodMenu(sequelize, DataTypes);
  var FoodMenuCaterer = _FoodMenuCaterer(sequelize, DataTypes);
  var FoodSchedule = _FoodSchedule(sequelize, DataTypes);
  var Hotel = _Hotel(sequelize, DataTypes);
  var HotelRoom = _HotelRoom(sequelize, DataTypes);
  var IndependentCaterer = _IndependentCaterer(sequelize, DataTypes);
  var Location = _Location(sequelize, DataTypes);
  var Menu = _Menu(sequelize, DataTypes);
  var PaymentType = _PaymentType(sequelize, DataTypes);
  var Permission = _Permission(sequelize, DataTypes);
  var RegUserPayment = _RegUserPayment(sequelize, DataTypes);
  var RegisteredUser = _RegisteredUser(sequelize, DataTypes);
  var Reward = _Reward(sequelize, DataTypes);
  var RoomBlock = _RoomBlock(sequelize, DataTypes);
  var Schedule = _Schedule(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Food.belongsToMany(FoodMenu, { as: 'food_menu_FoodMenus', through: FoodForFoodMenu, foreignKey: "food", otherKey: "food_menu" });
  FoodMenu.belongsToMany(Food, { as: 'food_Foods', through: FoodForFoodMenu, foreignKey: "food_menu", otherKey: "food" });
  FoodMenu.belongsToMany(IndependentCaterer, { as: 'caterer_IndependentCaterers', through: FoodMenuCaterer, foreignKey: "food_menu", otherKey: "caterer" });
  IndependentCaterer.belongsToMany(FoodMenu, { as: 'food_menu_FoodMenu_FoodMenuCaterers', through: FoodMenuCaterer, foreignKey: "caterer", otherKey: "food_menu" });
  PaymentType.belongsToMany(RegisteredUser, { as: 'reg_user_RegisteredUsers', through: RegUserPayment, foreignKey: "payment_type", otherKey: "reg_user" });
  RegisteredUser.belongsToMany(PaymentType, { as: 'payment_type_PaymentTypes', through: RegUserPayment, foreignKey: "reg_user", otherKey: "payment_type" });
  AccountPermissions.belongsTo(Account, { as: "account_Account", foreignKey: "account"});
  Account.hasMany(AccountPermissions, { as: "AccountPermissions", foreignKey: "account"});
  Device.belongsTo(Account, { as: "account", foreignKey: "account_id"});
  Account.hasMany(Device, { as: "Devices", foreignKey: "account_id"});
  Account.belongsTo(CustomerLoyaltyRole, { as: "customer_loyalty_CustomerLoyaltyRole", foreignKey: "customer_loyalty"});
  CustomerLoyaltyRole.hasMany(Account, { as: "Accounts", foreignKey: "customer_loyalty"});
  Reward.belongsTo(CustomerLoyaltyRole, { as: "loyalty", foreignKey: "loyalty_id"});
  CustomerLoyaltyRole.hasOne(Reward, { as: "Reward", foreignKey: "loyalty_id"});
  HotelRoom.belongsTo(FloorPlan, { as: "floor_plan", foreignKey: "floor_plan_id"});
  FloorPlan.hasMany(HotelRoom, { as: "HotelRooms", foreignKey: "floor_plan_id"});
  FoodForFoodMenu.belongsTo(Food, { as: "food_Food", foreignKey: "food"});
  Food.hasMany(FoodForFoodMenu, { as: "FoodForFoodMenus", foreignKey: "food"});
  FoodForFoodMenu.belongsTo(FoodMenu, { as: "food_menu_FoodMenu", foreignKey: "food_menu"});
  FoodMenu.hasMany(FoodForFoodMenu, { as: "FoodForFoodMenus", foreignKey: "food_menu"});
  FoodMenuCaterer.belongsTo(FoodMenu, { as: "food_menu_FoodMenu", foreignKey: "food_menu"});
  FoodMenu.hasMany(FoodMenuCaterer, { as: "FoodMenuCaterers", foreignKey: "food_menu"});
  FoodMenu.belongsTo(FoodSchedule, { as: "food_schedule_FoodSchedule", foreignKey: "food_schedule"});
  FoodSchedule.hasMany(FoodMenu, { as: "FoodMenus", foreignKey: "food_schedule"});
  HotelRoom.belongsTo(Hotel, { as: "hotel_name_Hotel", foreignKey: "hotel_name"});
  Hotel.hasMany(HotelRoom, { as: "HotelRooms", foreignKey: "hotel_name"});
  FoodMenuCaterer.belongsTo(IndependentCaterer, { as: "caterer_IndependentCaterer", foreignKey: "caterer"});
  IndependentCaterer.hasMany(FoodMenuCaterer, { as: "FoodMenuCaterers", foreignKey: "caterer"});
  Hotel.belongsTo(Location, { as: "location", foreignKey: "location_id"});
  Location.hasMany(Hotel, { as: "Hotels", foreignKey: "location_id"});
  RegUserPayment.belongsTo(PaymentType, { as: "payment_type_PaymentType", foreignKey: "payment_type"});
  PaymentType.hasMany(RegUserPayment, { as: "RegUserPayments", foreignKey: "payment_type"});
  AccountPermissions.belongsTo(Permission, { as: "permission_Permission", foreignKey: "permission"});
  Permission.hasMany(AccountPermissions, { as: "AccountPermissions", foreignKey: "permission"});
  BookingConfirmation.belongsTo(RegisteredUser, { as: "reg_user", foreignKey: "reg_user_id"});
  RegisteredUser.hasMany(BookingConfirmation, { as: "BookingConfirmations", foreignKey: "reg_user_id"});
  FoodSchedule.belongsTo(RegisteredUser, { as: "reg_user_RegisteredUser", foreignKey: "reg_user"});
  RegisteredUser.hasMany(FoodSchedule, { as: "FoodSchedules", foreignKey: "reg_user"});
  RegUserPayment.belongsTo(RegisteredUser, { as: "reg_user_RegisteredUser", foreignKey: "reg_user"});
  RegisteredUser.hasMany(RegUserPayment, { as: "RegUserPayments", foreignKey: "reg_user"});
  Schedule.belongsTo(RegisteredUser, { as: "reg_user", foreignKey: "reg_user_id"});
  RegisteredUser.hasMany(Schedule, { as: "Schedules", foreignKey: "reg_user_id"});
  HotelRoom.belongsTo(RoomBlock, { as: "room_block", foreignKey: "room_block_id"});
  RoomBlock.hasMany(HotelRoom, { as: "HotelRooms", foreignKey: "room_block_id"});
  HotelRoom.belongsTo(Schedule, { as: "schedule_Schedule", foreignKey: "schedule"});
  Schedule.hasMany(HotelRoom, { as: "HotelRooms", foreignKey: "schedule"});
  Account.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Account, { as: "Accounts", foreignKey: "user_id"});
  AdministratorUser.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(AdministratorUser, { as: "AdministratorUsers", foreignKey: "user_id"});
  Menu.belongsTo(User, { as: "user_User", foreignKey: "user"});
  User.hasMany(Menu, { as: "Menus", foreignKey: "user"});
  RegisteredUser.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(RegisteredUser, { as: "RegisteredUsers", foreignKey: "user_id"});

  return {
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
    RegUserPayment,
    RegisteredUser,
    Reward,
    RoomBlock,
    Schedule,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
