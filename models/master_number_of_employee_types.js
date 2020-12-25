const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_number_of_employee_types', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักประเภทจำนวนพนักงานในองค์กร",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "รหัสโค้ด"
    },
    num_em_type_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "ชื่อประเภทจำนวนพนักงานในองค์กร"
    },
    order_by: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "จัดเรียง"
    }
  }, {
    sequelize,
    tableName: 'master_number_of_employee_types',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "master_number_of_employee_types_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
