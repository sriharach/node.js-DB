const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_refresh_tokens', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    access_token_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    revoked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth_refresh_tokens',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "oauth_refresh_tokens_access_token_id_index",
        fields: [
          { name: "access_token_id" },
        ]
      },
      {
        name: "oauth_refresh_tokens_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
