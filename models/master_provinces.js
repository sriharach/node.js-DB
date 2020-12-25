const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_provinces', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสจังหวัด",
      primaryKey: true
    },
    prov_code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "โค้ดจังหวัด"
    },
    prov_text_code: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      comment: "โค้ดจังหวัดตัวอักษร"
    },
    prov_name_th: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อจังหวัดภาษาไทย"
    },
    prov_name_en: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อจังหวัดภาษาอังกฤษ"
    },
    reg_code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "โค้ดภูมิภาค"
    },
    cwt_unig: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      comment: "รหัสจังหวัดเชื่อมภาค"
    },
    initials: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      comment: "ชื่อย่อ"
    }
  }, {
    sequelize,
    tableName: 'master_provinces',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_provinces_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
