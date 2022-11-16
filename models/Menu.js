const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Menu', {
    menu_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    menu_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    menu_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user: {
      type: DataTypes.TINYINT,
      allowNull: true,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Menu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "menu_id" },
        ]
      },
      {
        name: "FK_USER_MENU_idx",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
};
