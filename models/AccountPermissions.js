const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountPermissions', {
    account_permission_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    account: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'account_id'
      }
    },
    permission: {
      type: DataTypes.TINYINT,
      allowNull: true,
      references: {
        model: 'Permission',
        key: 'permission_id'
      }
    }
  }, {
    sequelize,
    tableName: 'AccountPermissions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_permission_id" },
        ]
      },
      {
        name: "FK_ACCOUNT_ACCOUNTPERMISSIONS_idx",
        using: "BTREE",
        fields: [
          { name: "account" },
        ]
      },
      {
        name: "FK_PERMISSION_ACCOUNTPERMISSIONS_idx",
        using: "BTREE",
        fields: [
          { name: "permission" },
        ]
      },
    ]
  });
};
