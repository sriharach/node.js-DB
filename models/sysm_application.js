const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_application', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสโปรแกรม",
      primaryKey: true
    },
    application_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อโปรแกรม"
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ลิ้งค์ที่อยู่โปรแกรม"
    },
    access: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "สิทธิ์การเข้าถึง",
      references: {
        model: 'sysm_access_levels',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "สร้างข้อมูลโดย"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "สร้างข้อมูลวันที่"
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ปรับปรุงโดย"
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่ปรับปรุงข้อมูล"
    },
    use_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "สถานะการใช้งานเป็น menu"
    },
    parent_menu: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "มีเมนูแม่เป็นอะไร",
      references: {
        model: 'sysm_application',
        key: 'id'
      }
    },
    func_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะการเป็น app หรือ module หรือ none function"
    },
    application_name_eng: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sysm_application',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "fki_app_access_id",
        fields: [
          { name: "access" },
        ]
      },
      {
        name: "sysm_application_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
