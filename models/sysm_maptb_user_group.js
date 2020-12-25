const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_maptb_user_group', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสผู้ใช้",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "กลุ่มผู้ใช้",
      references: {
        model: 'sysm_user_groups',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sysm_maptb_user_group',
    schema: 'system',
    timestamps: false
  });
};
