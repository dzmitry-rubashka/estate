"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE, TEXT }) {
    await queryInterface.createTable("Messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      username: {
        type: STRING,
      },
      email: {
        type: STRING,
      },
      phone: {
        type: STRING,
      },
      message: {
        type: TEXT,
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
    await queryInterface.dropTable("Messages");
  },
};
