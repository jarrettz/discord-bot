const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Schedule', {
    schedule_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    schedule_year: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    schedule_interval: {
      type: DataTypes.TINYINT,
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
    tableName: 'Schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
          { name: "reg_user_id" },
        ]
      },
      {
        name: "FK_REGUSER_SCHEDULE_idx",
        using: "BTREE",
        fields: [
          { name: "reg_user_id" },
        ]
      },
    ]
  });
};
