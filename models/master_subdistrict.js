const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_subdistrict', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสตำบล",
      primaryKey: true
    },
    subdit_code: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      comment: "โค้ดตำบล"
    },
    zip_code: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      comment: "รหัสไปรษณี"
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
    },
    dit_id: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      comment: "รหัส อำเภอตารางเดิม"
    },
    district_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัส อำเภอ",
      references: {
        model: 'master_district',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'master_subdistrict',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "fki_TAM_district_id",
        fields: [
          { name: "district_id" },
        ]
      },
      {
        name: "master_subdistrict_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
