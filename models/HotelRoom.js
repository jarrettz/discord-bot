const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HotelRoom', {
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room_is_booked: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    room_has_ac: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    hotel_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'Hotel',
        key: 'hotel_name'
      }
    },
    room_block_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'RoomBlock',
        key: 'room_block_id'
      }
    },
    floor_plan_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'FloorPlan',
        key: 'floor_plan_id'
      }
    },
    schedule: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'Schedule',
        key: 'schedule_id'
      }
    }
  }, {
    sequelize,
    tableName: 'HotelRoom',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "FK_HOTEL_HOTELROOM_idx",
        using: "BTREE",
        fields: [
          { name: "hotel_name" },
        ]
      },
      {
        name: "FK_ROOMBLOCK_HOTELROOM_idx",
        using: "BTREE",
        fields: [
          { name: "room_block_id" },
        ]
      },
      {
        name: "FK_FLOORPLAN_HOTELROOM_idx",
        using: "BTREE",
        fields: [
          { name: "floor_plan_id" },
        ]
      },
      {
        name: "FK_SCHEDULE_HOTELROOM_idx",
        using: "BTREE",
        fields: [
          { name: "schedule" },
        ]
      },
    ]
  });
};
