"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Photos", [
      {
        photo_url:
          "https://images1.apartments.com/i2/xYvE8R-cQi21lWBmKjDSzjBWgl_m5IFUBONf1eKKBQ4/116/covina-grand-covina-ca-primary-photo.jpg?p=1",
        property_id: 1,
      },
      {
        photo_url:
          "https://cdngeneralcf.rentcafe.com/dmslivecafe/3/162647/3_162647_1761129.jpg?crop=(0,0,300,199)&cropxunits=300&cropyunits=199&quality=85&",
        property_id: 2,
      },
      {
        photo_url:
          "https://d1fljssojtmux2.cloudfront.net/fe7915d04191ef8d8aa9788b726b457824b6b542-1-large.jpeg",
        property_id: 3,
      },
      {
        photo_url:
          "https://images1.apartments.com/i2/ZDUderbYCERQ5iXGr38a6C4sEHJ_racn7nWzF9x4g-A/111/image.jpg",
        property_id: 4,
      },
      {
        photo_url:
          "https://media.equityapartments.com/images/q_auto/f_auto/fl_lossy/110-35/briarwood-apartments-exterior",
        property_id: 5,
      },
      {
        photo_url:
          "https://www.essystem.pl/media/sg_project/images/186/2377106/10_PU-EMIL_LATO-5.jpg?ts=1572527539",
        property_id: 6,
      },
      {
        photo_url:
          "https://medialibrarycf.entrata.com/2342/MLv3/3/27/2022/2/24/7566/5f1b069e504789.57753229760.jpg",
        property_id: 7,
      },
      {
        photo_url:
          "https://images1.apartments.com/i2/kS--v7XghXp8zySx7pV9w5mUsr0bG3ZTQ9_U5cI_A4A/116/gateway-west-loop-chicago-il-building-photo.jpg?p=1",
        property_id: 8,
      },
      {
        photo_url:
          "https://www.thespruce.com/thmb/FW3SuMrTsk3PXM1j_0cdADGfTyw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PhotoCreditDarrenSetlow-32d8e19c0b1348a0b6ac2967764bfc03.jpg",
        property_id: 9,
      },
      {
        photo_url:
          "http://kathyandrews.com/wp-content/uploads/2017/11/Kathy-Andrews-Interiors-Grand-at-the-Dominion-Outdoor-1030x682.jpeg",
        property_id: 10,
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Photos", null, {});
  },
};
