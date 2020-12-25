const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_app_func_status_type', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสหลักประเภท function",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "โค้ดเรียกใช้"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อเรียกประเภท"
    }
  }, {
    sequelize,
    tableName: 'sysm_app_func_status_type',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_app_func_status_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
