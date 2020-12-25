const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_creator', {
    comp_user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ไอดีตาราง"
    },
    comp_user_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    comp_user_surname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    comp_user_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    comp_user_password: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ID บริษัท"
    }
  }, {
    sequelize,
    tableName: 'company_creator',
    schema: 'hrconn_data',
    timestamps: false
  });
};
