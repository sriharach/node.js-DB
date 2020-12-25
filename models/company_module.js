const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_module', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    module_id: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    start_use_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่เริ่มใช้งาน HRConnext Module นี้"
    },
    end_use_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่สิ้นสุดการใช้งาน HRConnext Module นี้"
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_module',
    schema: 'hrconn_data',
    timestamps: false
  });
};
