"use strict";

module.exports = {
  async up(queryInterface, { BOOLEAN, STRING, INTEGER, DATE }) {
    await queryInterface.createTable("Logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      content: {
        type: STRING,
      },
      done: {
        type: BOOLEAN,
        defaultValue: false,
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
      message_id: {
        type: INTEGER,
        references: {
          model: "Messages",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Logs");
  },
};
