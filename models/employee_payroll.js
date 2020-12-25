const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_payroll', {
    person_ssn: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    company_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    emp_position: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    salary_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extent_salary: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_payroll',
    schema: 'hrconn_data',
    timestamps: false
  });
};
