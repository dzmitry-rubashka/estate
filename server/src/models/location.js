"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.hasMany(models.Property, {
        foreignKey: "location_id",
      });
      Location.hasMany(models.Agent, {
        foreignKey: "location_id",
      });
    }
  }
  Location.init(
    {
      city: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Location",
      timestamps: false,
    }
  );
  return Location;
};
