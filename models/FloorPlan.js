const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FloorPlan', {
    floor_plan_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    floor_plan_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    floor_plan_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FloorPlan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "floor_plan_id" },
        ]
      },
    ]
  });
};
