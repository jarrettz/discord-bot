const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RegUserPayment', {
    reg_user_pay_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    reg_user: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RegisteredUser',
        key: 'reg_user_id'
      }
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PaymentType',
        key: 'payment_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'RegUserPayment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reg_user_pay_id" },
          { name: "payment_type" },
          { name: "reg_user" },
        ]
      },
      {
        name: "FK_REG_USER_REGUSERPAYMENT_idx",
        using: "BTREE",
        fields: [
          { name: "reg_user" },
        ]
      },
      {
        name: "FK_PAYMENTTYPE_REGUSERPAYMENT_idx",
        using: "BTREE",
        fields: [
          { name: "payment_type" },
        ]
      },
    ]
  });
};
