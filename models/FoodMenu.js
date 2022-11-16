const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoodMenu', {
    food_menu_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    food_menu_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    food_menu_category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    food_schedule: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FoodSchedule',
        key: 'food_schedule_id'
      }
    }
  }, {
    sequelize,
    tableName: 'FoodMenu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_menu_id" },
          { name: "food_schedule" },
        ]
      },
      {
        name: "FK_FOODSCHEDULE_FOODMENU_idx",
        using: "BTREE",
        fields: [
          { name: "food_schedule" },
        ]
      },
    ]
  });
};
