const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BookingConfirmation', {
    booking_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    booking_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reg_user_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RegisteredUser',
        key: 'reg_user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'BookingConfirmation',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "booking_id" },
          { name: "reg_user_id" },
        ]
      },
      {
        name: "FK_REGUSER_BOOKINGCONFIRMATION_idx",
        using: "BTREE",
        fields: [
          { name: "reg_user_id" },
        ]
      },
    ]
  });
};
