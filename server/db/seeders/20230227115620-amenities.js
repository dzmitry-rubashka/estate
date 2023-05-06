"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Amenities", [
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 1,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 2,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 3,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 4,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 5,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 6,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 7,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 8,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 9,
      },
      {
        balcony: true,
        air_conditioning: true,
        alarm_clock: true,
        property_id: 10,
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Amenities", null, {});
  },
};
