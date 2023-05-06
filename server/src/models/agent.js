"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    static associate(models) {
      Agent.hasMany(models.Property, {
        foreignKey: "agent_id",
      });
      Agent.belongsTo(models.Location, { foreignKey: "location_id" });
    }
  }
  Agent.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: DataTypes.STRING,
      photo_url: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Agent",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Agent;
};
