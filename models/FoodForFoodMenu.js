const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoodForFoodMenu', {
    food_for_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    food: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Food',
        key: 'food_name'
      }
    },
    food_menu: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FoodMenu',
        key: 'food_menu_id'
      }
    }
  }, {
    sequelize,
    tableName: 'FoodForFoodMenu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_for_id" },
          { name: "food_menu" },
          { name: "food" },
        ]
      },
      {
        name: "FK_FOOD_FOODFORFOODMENU_idx",
        using: "BTREE",
        fields: [
          { name: "food" },
        ]
      },
      {
        name: "FK_FOOD_MENU_FOODFORFOODMENU_idx",
        using: "BTREE",
        fields: [
          { name: "food_menu" },
        ]
      },
    ]
  });
};
