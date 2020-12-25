const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_Leave', {
    employee_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sick_leave_quota: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ลาป่วย"
    },
    sick_leave_used: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    anual_leave_quota: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ประจำปี"
    },
    anual_leave_used: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    vacation_leave_quota: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ลาพักร้อน"
    },
    vacation_leave_used: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    personal_leave_quota: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ลากิจ"
    },
    personal_leave_used: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_Leave',
    schema: 'hrconn_data',
    timestamps: false
  });
};
