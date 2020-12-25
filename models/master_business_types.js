const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_business_types', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักประเภทธุรกิจ",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "รหัสโค้ด"
    },
    business_type_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อประเภทธุรกิจ"
    },
    order_by: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "การจัดเรียง"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ผู้ใช้ที่สร้างข้อมูล"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "วันเวลาที่สร้างข้อมูล"
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ผู้ใช้ที่ปรับปรุงข้อมูล"
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลาที่ปรับปรุงข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'master_business_types',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_business_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
