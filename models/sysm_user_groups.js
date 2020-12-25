const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_user_groups', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสกลุ่ม",
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสกลุ่มแม่",
      references: {
        model: 'sysm_user_groups',
        key: 'id'
      }
    },
    group_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อกลุ่ม"
    }
  }, {
    sequelize,
    tableName: 'sysm_user_groups',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "fki_group_parent",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "sysm_user_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
