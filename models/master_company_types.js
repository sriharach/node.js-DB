const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_company_types', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักประเภทการจดทะเบียนธุรกิจ",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "รหัสโค้ดประเภทการจดทะเบียนธุรกิจ"
    },
    company_type_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "ชื่อประเภทการจดทะเบียนธุรกิจ"
    },
    order_by: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "การจัดเรียงข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'master_company_types',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_company_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
