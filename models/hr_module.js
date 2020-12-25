const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hr_module', {
    module_id: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    module_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    module_discription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    module_prices_1: {
      type: DataTypes.REAL,
      allowNull: true
    },
    module_prices_2: {
      type: DataTypes.REAL,
      allowNull: true
    },
    module_prices_3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    freeday_trail: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hr_module',
    schema: 'hrconn_data',
    timestamps: false
  });
};
