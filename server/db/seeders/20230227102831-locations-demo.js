"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Locations", [
      {
        city: "Los Angeles",
        country: "USA",
      },
      {
        city: "New York",
        country: "USA",
      },
      {
        city: "Ashland",
        country: "USA",
      },
      {
        city: "San Jose",
        country: "USA",
      },
      {
        city: "Altamont",
        country: "USA",
      },
      {
        city: "Saint Louis",
        country: "USA",
      },
      {
        city: "Chicago",
        country: "USA",
      },
      {
        city: "Brighton",
        country: "Great Britain",
      },
      {
        city: "San Antonio",
        country: "USA",
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Locations", null, {});
  },
};
