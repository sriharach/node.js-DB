const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักตารางบุคคล",
      primaryKey: true
    },
    emp_id_card_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "employee id , Citicen id"
    },
    employee_ssn: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    prename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "M,F"
    },
    married_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    home_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    home_address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    home_province: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    home_distric: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    home_subdistric: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    home_postcode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    home_phone_no: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contact_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_distric: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    contact_subdistric: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    contact_postcode: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    contact_phone_no: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    mobile_phone_no: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    email_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    social_security_no: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    home_country: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    contact_country: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "person_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
