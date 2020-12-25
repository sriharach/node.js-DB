const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_reg_map_prov', {
    reg_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสภูมิภาค",
      references: {
        model: 'master_region',
        key: 'id'
      }
    },
    prov_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสจังหวัด",
      references: {
        model: 'master_provinces',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'master_reg_map_prov',
    schema: 'hrconn_data',
    timestamps: false
  });
};
