const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reward', {
    loyalty_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CustomerLoyaltyRole',
        key: 'loyalty_id'
      }
    },
    reward_category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    reward_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    reward_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Reward',
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
      {
        name: "FK_LOYALTY_REWARD_idx",
        using: "BTREE",
        fields: [
          { name: "loyalty_id" },
        ]
      },
    ]
  });
};
