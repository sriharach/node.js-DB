const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('confirms', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'confirms',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "confirms_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
