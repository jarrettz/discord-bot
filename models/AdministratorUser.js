const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdministratorUser', {
    admin_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    admin_username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    admin_password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'AdministratorUser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "FK_PK_USER_ADMINUSER_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
