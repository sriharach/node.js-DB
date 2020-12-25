const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักผู้ใช้งาน",
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "ชื่อผู้ใช้เข้าระบบ"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "รหัสผ่านเข้าระบบ"
    },
    e_mail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "e-mail ผู้ใช้งานระบบ"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "บันทึกความจำ"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "สถานะผู้ใช้งาน"
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "เข้าระบบล่าสุด"
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
    login_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "สถานะการเข้าสูระบบ"
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activate: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sysm_users',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "user_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
