"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Agents", [
      {
        first_name: "Adam",
        last_name: "Conover",
        email: "testagenjohn@gmail.com",
        phone: "+0 123-456-7890",
        photo_url:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        location_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Ann",
        last_name: "Smith",
        email: "marikord26@gmail.com",
        phone: "+0 321-456-7890",
        photo_url:
          "https://thinkrealty.com/wp-content/uploads/2020/09/iStock-1315341891.jpg",
        location_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Doris",
        last_name: "Jones",
        email: "jan.nowak.personal@gmail.com",
        phone: "+0 231-456-7890",
        photo_url:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        location_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Sam",
        last_name: "Jones",
        email: "estate.jsmastery@gmail.com",
        phone: "+0 444-333-7890",
        photo_url:
          "https://blackrealestateagents.com/wp-content/uploads/2019/11/black-professional-realtor.jpg",
        location_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Agents", null, {});
  },
};
