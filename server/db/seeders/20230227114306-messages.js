"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Messages", [
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 1",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 2",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 3",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 4",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 5",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 6",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 7",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 8",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 9",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Adam Smith",
        email: "a.smith@user.com",
        phone: "123321123",
        message: "Message about property 10",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Messages", null, {});
  },
};
