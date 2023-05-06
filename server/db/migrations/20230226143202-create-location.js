"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
    await queryInterface.createTable("Locations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      city: {
        type: STRING,
      },
      country: {
        type: STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Locations");
  },
};
