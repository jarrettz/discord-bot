const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoomBlock', {
    room_block_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    room_block_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    room_block_room_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RoomBlock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "room_block_id" },
        ]
      },
    ]
  });
};
