const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    company_id: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    department_id: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    departmentName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    department_id_parent: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "แผนก\/หรือฝ่าย ที่เป้นหน่วยเหนือ"
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักแผนก",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'hrconn_data',
    timestamps: false
  });
};
