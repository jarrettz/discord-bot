const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoodSchedule', {
    food_schedule_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    food_schedule_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    food_schedule_duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reg_user: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RegisteredUser',
        key: 'reg_user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'FoodSchedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_schedule_id" },
          { name: "reg_user" },
        ]
      },
      {
        name: "FK_REG_USER_FOODSCHEDULE_idx",
        using: "BTREE",
        fields: [
          { name: "reg_user" },
        ]
      },
    ]
  });
};
