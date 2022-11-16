const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentType', {
    payment_type_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    payment_type_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_type_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PaymentType',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_type_id" },
        ]
      },
    ]
  });
};
