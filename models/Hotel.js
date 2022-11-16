const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hotel', {
    hotel_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    hotel_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    hotel_rating: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    location_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Location',
        key: 'location_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Hotel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hotel_name" },
          { name: "location_id" },
        ]
      },
      {
        name: "FK_LOCATION_HOTEL_idx",
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
