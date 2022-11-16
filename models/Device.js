const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Device', {
    device_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    device_times_logged_in: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    device_address: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    account_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Account',
        key: 'account_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Device',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device_id" },
          { name: "account_id" },
        ]
      },
      {
        name: "FK_ACCOUNT_DEVICE_idx",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
    ]
  });
};
