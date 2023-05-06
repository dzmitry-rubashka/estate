"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Floorplans", [
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 1,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 1,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 2,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 2,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 3,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 3,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 4,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 4,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 5,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 5,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 6,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 6,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 7,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 7,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 8,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 8,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 9,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 9,
      },
      {
        floorplan_url:
          "https://elementsproperty.co.uk/wp-content/uploads/2017/10/black-and-white-floorplan-1024x682.jpg",
        floorplan_number: 1,
        property_id: 10,
      },
      {
        floorplan_url:
          "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
        floorplan_number: 2,
        property_id: 10,
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Floorplans", null, {});
  },
};
