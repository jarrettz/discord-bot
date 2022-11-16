const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    account_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    account_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    customer_loyalty: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'CustomerLoyaltyRole',
        key: 'loyalty_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "FK_USER_ACCOUNT_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK_CUSTOMERLOYALTYROLE_ACCOUNT_idx",
        using: "BTREE",
        fields: [
          { name: "customer_loyalty" },
        ]
      },
    ]
  });
};
