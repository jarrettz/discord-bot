const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RegisteredUser', {
    reg_user_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    reg_user_username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    reg_user_password: {
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
    tableName: 'RegisteredUser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reg_user_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "FK_PK_USER_REGUSER_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
