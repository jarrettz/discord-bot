const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Food', {
    food_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    food_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    food_calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_name" },
        ]
      },
    ]
  });
};
