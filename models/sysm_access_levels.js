const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_access_levels', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสสิทธิ์",
      primaryKey: true
    },
    access_name: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      comment: "ชื่อสิทธิ์"
    },
    ordering: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ตัวเรียงลำดับ"
    },
    rules: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
      comment: "รหัสกลุ่มผู้ใช้ เก็บเป็น array"
    }
  }, {
    sequelize,
    tableName: 'sysm_access_levels',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_access_levels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
