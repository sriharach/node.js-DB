const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_business_subtypes', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักประเภทลักษณะการประกอบกิจการย่อย",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "รหัสโค้ด"
    },
    business_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสลักษัณะประเภทการประกอบกิจการหลัก"
    },
    business_subtype_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อลักษณะประเภทการประกอบกิจการย่อย"
    },
    order_by: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "จัดเรียง"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ผู้ใช้ที่สร้างข้อมุล"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "วันที่สร้างข้อมูล"
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ผู้ใช้ที่ปรับปรุงข้อมูล"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ปรับปรุงข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'master_business_subtypes',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_business_subtypes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
