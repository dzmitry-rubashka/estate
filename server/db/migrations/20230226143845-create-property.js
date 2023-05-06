"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, ENUM, STRING, DATE, TEXT }) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      type: {
        type: ENUM("apartment", "business", "house", "townhouse"),
      },
      offer: {
        type: ENUM("sale", "rent"),
      },
      price: {
        type: INTEGER,
      },
      title: {
        type: STRING,
      },
      preview: {
        type: TEXT,
      },
      description: {
        type: TEXT,
      },
      area: {
        type: INTEGER,
      },
      bedrooms: {
        type: INTEGER,
      },
      bathrooms: {
        type: INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DATE,
      },
      updated_at: {
        allowNull: false,
        type: DATE,
      },
      deleted_at: {
        type: DATE,
      },
      location_id: {
        type: INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
      },
      agent_id: {
        type: INTEGER,
        references: {
          model: "Agents",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Properties");
  },
};
