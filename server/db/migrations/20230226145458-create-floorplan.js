"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
    await queryInterface.createTable("Floorplans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      floorplan_url: {
        type: STRING,
      },
      floorplan_number: {
        type: INTEGER,
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
    await queryInterface.dropTable("Floorplans");
  },
};
