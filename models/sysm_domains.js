const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_domains', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักตารางจัดการ Domains",
      primaryKey: true
    },
    domain_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ Domain"
    },
    access_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสการเข้าถึงข้อมูล"
    },
    domain_status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะ Domain"
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
      comment: "วันเวลาปรับปรุงข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'sysm_domains',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_domains_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
