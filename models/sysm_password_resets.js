const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_password_resets', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sysm_password_resets',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "password_resets_email_index",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
