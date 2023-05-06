"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Floorplan extends Model {
    static associate(models) {
      Floorplan.belongsTo(models.Property, { foreignKey: "property_id" });
    }
  }
  Floorplan.init(
    {
      floorplan_url: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
      },
      floorplan_number: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Floorplan",
      timestamps: false,
    }
  );
  return Floorplan;
};
