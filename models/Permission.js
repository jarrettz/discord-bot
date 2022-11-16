const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permission', {
    permission_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    permission_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    permission_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Permission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
};
