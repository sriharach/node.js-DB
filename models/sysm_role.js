const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_role', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสบทบาท",
      primaryKey: true
    },
    application_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสโปรแกรม",
      references: {
        model: 'sysm_application',
        key: 'id'
      }
    },
    create: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สิทธิ์สร้างข้อมูล"
    },
    read: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สิทธิ์การอ่านข้อมูล"
    },
    update: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สิทธิ์การปรับปรุงข้อมูล"
    },
    delete: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สิทธิ์การลบ"
    },
    group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสกลุ่มผุ้ใช้",
      references: {
        model: 'sysm_user_groups',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสผุ้สร้างสิทธิ์",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลาที่สร้าง"
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ผู้ปรับปรุงข้อมุล",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลาที่ปรับปรุงข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'sysm_role',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
