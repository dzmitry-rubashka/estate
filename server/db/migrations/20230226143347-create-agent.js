"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable("Agents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      first_name: {
        type: STRING,
      },
      last_name: {
        type: STRING,
      },
      email: {
        type: STRING,
        unique: true,
      },
      phone: {
        type: STRING,
      },
      photo_url: {
        type: STRING,
      },
      created_at: {
        allowNull: false,
        type: DATE,
      },
      updated_at: {
        allowNull: false,
        type: DATE,
      },
      location_id: {
        type: INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Agents");
  },
};
