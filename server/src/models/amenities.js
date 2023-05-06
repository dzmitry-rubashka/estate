"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Amenities extends Model {
    static associate(models) {
      Amenities.belongsTo(models.Property, { foreignKey: "property_id" });
    }
  }
  Amenities.init(
    {
      balcony: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      air_conditioning: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      alarm_clock: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      clothes_dryer: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      coffee_maker: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      dishwasher: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      dishes_and_utensils: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      fireplace: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      deck_or_patio: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      freezer: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      garage: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      heating: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      ice_maker: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      internet: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      microwave: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      outdoor_grill: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      oven: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      parking_on_street: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      water_cooler: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      washing_machine: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      toaster: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      telephone: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      stove: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      sofa_bed: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      security_system: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      satellite_or_cable_tv: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
      refrigerator: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        validate: { isBoolean: true },
      },
    },
    {
      sequelize,
      modelName: "Amenities",
      timestamps: false,
    }
  );
  return Amenities;
};
