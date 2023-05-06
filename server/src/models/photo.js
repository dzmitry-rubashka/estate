"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.Property, { foreignKey: "property_id" });
    }
  }
  Photo.init(
    {
      photo_url: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
      },
    },
    {
      sequelize,
      modelName: "Photo",
      timestamps: false,
    }
  );
  return Photo;
};
