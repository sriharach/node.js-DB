const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('failed_jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "failed_jobs_uuid_unique"
    },
    connection: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exception: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'failed_jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "failed_jobs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "failed_jobs_uuid_unique",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
};
