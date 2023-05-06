"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      Log.belongsTo(models.Message, { foreignKey: "message_id" });
    }
  }
  Log.init(
    {
      content: DataTypes.STRING,
      done: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Log;
};
