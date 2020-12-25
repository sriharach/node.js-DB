const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_clients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    redirect: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    personal_access_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    revoked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth_clients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "oauth_clients_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "oauth_clients_user_id_index",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
