const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_region', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสภูมิภาค",
      primaryKey: true
    },
    reg_code: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "รหัสภูมิภาคตารางเดิม"
    },
    name_th: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อภาษาไทย"
    },
    name_en: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อภาษาอังกฤษ"
    }
  }, {
    sequelize,
    tableName: 'master_region',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_geographies_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
