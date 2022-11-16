const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IndependentCaterer', {
    caterer_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    caterer_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    caterer_score: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'IndependentCaterer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "caterer_id" },
        ]
      },
    ]
  });
};
