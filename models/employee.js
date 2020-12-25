const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    person_ssn: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "หมายเลขบัตรประกันสังคม"
    },
    employee_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    department_id: {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "แผนก"
    },
    current_position: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ตำแหน่งงานปัจจุบัน ใน department_id นี้"
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    probationary_pass_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ผ่านระยะเวลาทดลองงาน"
    },
    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันจ้างงาน"
    },
    termination_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันสิ้นสุดการจ้าง"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "1 คือยังเป็นพนักงาน , 0 คือ เลิกจ้างแล้ว"
    },
    t_shirt_size: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    report_to: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "To employee_id  ที่เป็น Boss โดยตรง"
    },
    emp_id_card_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "เลขบัตรประจำตัวประชาชน (คนไทย 13 หลัก)"
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'hrconn_data',
    timestamps: false
  });
};
