"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, BOOLEAN }) {
    await queryInterface.createTable("Amenities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      balcony: { type: BOOLEAN, defaultValue: false },
      air_conditioning: { type: BOOLEAN, defaultValue: false },
      alarm_clock: { type: BOOLEAN, defaultValue: false },
      clothes_dryer: { type: BOOLEAN, defaultValue: false },
      coffee_maker: { type: BOOLEAN, defaultValue: false },
      dishwasher: { type: BOOLEAN, defaultValue: false },
      dishes_and_utensils: { type: BOOLEAN, defaultValue: false },
      fireplace: { type: BOOLEAN, defaultValue: false },
      deck_or_patio: { type: BOOLEAN, defaultValue: false },
      freezer: { type: BOOLEAN, defaultValue: false },
      garage: { type: BOOLEAN, defaultValue: false },
      heating: { type: BOOLEAN, defaultValue: false },
      ice_maker: { type: BOOLEAN, defaultValue: false },
      internet: { type: BOOLEAN, defaultValue: false },
      microwave: { type: BOOLEAN, defaultValue: false },
      outdoor_grill: { type: BOOLEAN, defaultValue: false },
      oven: { type: BOOLEAN, defaultValue: false },
      parking_on_street: { type: BOOLEAN, defaultValue: false },
      water_cooler: { type: BOOLEAN, defaultValue: false },
      washing_machine: { type: BOOLEAN, defaultValue: false },
      toaster: { type: BOOLEAN, defaultValue: false },
      telephone: { type: BOOLEAN, defaultValue: false },
      stove: { type: BOOLEAN, defaultValue: false },
      sofa_bed: { type: BOOLEAN, defaultValue: false },
      security_system: { type: BOOLEAN, defaultValue: false },
      satellite_or_cable_tv: { type: BOOLEAN, defaultValue: false },
      refrigerator: { type: BOOLEAN, defaultValue: false },
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
    await queryInterface.dropTable("Amenities");
  },
};
