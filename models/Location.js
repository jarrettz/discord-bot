const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    location_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    location_street: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    location_city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    location_zip: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    location_country: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Location',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
