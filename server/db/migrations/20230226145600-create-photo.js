"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
    await queryInterface.createTable("Photos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      photo_url: {
        type: STRING,
      },
      property_id: {
        type: INTEGER,
        references: {
          model: "Properties",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Photos");
  },
};
