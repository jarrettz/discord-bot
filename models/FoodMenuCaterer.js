const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoodMenuCaterer', {
    food_menu_caterer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    food_menu: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'FoodMenu',
        key: 'food_menu_id'
      }
    },
    caterer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'IndependentCaterer',
        key: 'caterer_id'
      }
    }
  }, {
    sequelize,
    tableName: 'FoodMenuCaterer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_menu_caterer_id" },
          { name: "food_menu" },
          { name: "caterer" },
        ]
      },
      {
        name: "FK_FOODMENU_FOODMENUCATERER_idx",
        using: "BTREE",
        fields: [
          { name: "food_menu" },
        ]
      },
      {
        name: "FK_CATERER_FOODMENUCATERER_idx",
        using: "BTREE",
        fields: [
          { name: "caterer" },
        ]
      },
    ]
  });
};
