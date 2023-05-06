"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Logs", [
      {
        content: "Buy milk",
        done: false,
        message_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Feed the cat",
        done: false,
        message_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Feed the dog",
        done: false,
        message_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Buy eggs",
        done: false,
        message_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Wash the dishes",
        done: false,
        message_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Walk the dog",
        done: false,
        message_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Buy vegetables",
        done: false,
        message_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Clean house",
        done: false,
        message_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Buy bananas",
        done: false,
        message_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: "Buy cookies",
        done: false,
        message_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Logs", null, {});
  },
};
