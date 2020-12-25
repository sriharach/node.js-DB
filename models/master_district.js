const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_district', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสอำเภอ",
      primaryKey: true
    },
    dit_id: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      comment: "รหัสอำเภอตารางเดิม"
    },
    dit_code: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      comment: "Code อำเภอ"
    },
    name_th: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อภาษาไทย"
    },
    name_en: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อภาษาอังกฤษ"
    },
    prov_code: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      comment: "โค้ดจังหวัด"
    },
    province_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสจังหวัดเดิม",
      references: {
        model: 'master_provinces',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'master_district',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "fki_DIST_province_id",
        fields: [
          { name: "province_id" },
        ]
      },
      {
        name: "master_district_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
