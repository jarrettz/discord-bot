const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerLoyaltyRole', {
    loyalty_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    loyalty_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    loyalty_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CustomerLoyaltyRole',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "loyalty_id" },
        ]
      },
    ]
  });
};
