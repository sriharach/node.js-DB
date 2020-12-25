const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_tb_leave', {
    leave_type_code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    leaveType: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'master_tb_leave',
    schema: 'hrconn_data',
    timestamps: false
  });
};
