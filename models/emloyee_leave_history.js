const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emloyee_leave_history', {
    employee_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    leave_type_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    leave_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    leave_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emloyee_leave_history',
    schema: 'hrconn_data',
    timestamps: false
  });
};
