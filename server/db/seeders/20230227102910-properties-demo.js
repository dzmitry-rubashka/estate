"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Properties", [
      {
        type: "apartment",
        offer: "sale",
        price: 5000000,
        title: "Covina Grand",
        preview:
          "Covina Grand is an apartment community located in Los Angeles County.",
        description:
          "Welcome home to your newly renovated apartment home at Covina Grand, located in Covina, CA. Experience the best in upscale living in our spacious, one, two or three-bedroom apartment homes that features vinyl flooring, new appliances, central air and heat, and other contemporary accents. We offer the best pet-friendly community amenities and so much more.",
        area: 2200,
        bedrooms: 5,
        bathrooms: 3,
        location_id: 1,
        agent_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "house",
        offer: "rent",
        price: 1750,
        title: "Hillside Village Apartments",
        preview:
          "A bustling hub of home, work, and play where locally inspired ﬂavor can be found everywhere.",
        description:
          "The family apartments at Hillside Village were renovated in 2007. The property is well-located on a major city street with regular local bus services; parking is also provided on-site. A large city park is within walking distance. Laundry facilities are provided for residents, and some of the apartments are wheelchair-accessible.",
        area: 645,
        bedrooms: 2,
        bathrooms: 1,
        location_id: 2,
        agent_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "townhouse",
        offer: "sale",
        price: 1200000,
        title: "Wagner Creek Estates",
        preview:
          "Enchanting secluded home on wooded acreage with private hiking trails.",
        description:
          "Nestled in the hills along the Middle Fork Willamette Watershed, the Wagner Creek easement borders BLM timberlands. Across the landscape, seasonal rainfall spreads and drains, making its way into the Dexter Reservoir downslope. The mixed upland forests boast Douglas Fir trees nearing 100 years in age. Walking the area, the canopy opens into remnant prairie meadows which provide critical habitat to sensitive plant and animal communities. Sitting in the foothills of the Willamette National Forest, permanent protection of this special area connects private lands to national forest – carving a space for mammals including Roosevelt Elk, Black Bear, and Cougar to roam the spaces between rural and wild. ",
        area: 1290,
        bedrooms: 3,
        bathrooms: 1,
        location_id: 3,
        agent_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "house",
        offer: "rent",
        price: 2400,
        title: "Wilshire Embassy Apartments",
        preview:
          "Wilshire Embassy Apartments is located in Melrose, California.",
        description:
          "Live in a Vacation Destination All Year! This bright, freshly-renovated building has brand new features, crisp paint, and huge windows with gorgeous view of the Miracle Mile. Live in a quiet community in a top-notch neighborhood. Located just one block from the popular LACMA and Petersen museum district, this apartment home is steps away from restaurants, The Grove, coffee shops, grocery stores, popular food-trucks, and soon-to-be site of the subway's purple line extension. Our sun-drenched apartment homes features: - Ample storage and closet space - Air Conditioning - One parking space in gated garage - Sun-drenched pool plaza - On-site laundry facilities - Water, trash, and recycling paid - Secure-locked entry to building - 24-hour camera surveillance in building - On-site building manager - Quiet, friendly neighbors Call or Email for More Info and to Schedule Your Tour!",
        area: 3760,
        bedrooms: 3,
        bathrooms: 2,
        location_id: 1,
        agent_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "house",
        offer: "sale",
        price: 2300000,
        title: "Briarwood Apartments",
        preview:
          "Briarwood Apartments is located in Sunnyvale, a picturesque Silicon Valley community.",
        description:
          "The lushly landscaped Briarwood Apartments lets you experience the beauty of nature while still being in the heart of Silicon Valley. Your commute is a snap with easy access to major highways, Caltrain, and the Sunnyvale Town Center. These newly renovated homes feature gorgeous finishes, walk-in closets, in-home washer/dryer and private balconies for admiring the view. Unwinding after a long work day is a breeze when you're able to relax by the pool, take the kids to the playground and socialize. You won't a place more relaxing and serene than the homes at Briarwood Apartments.",
        area: 940,
        bedrooms: 4,
        bathrooms: 2,
        location_id: 4,
        agent_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "business",
        offer: "sale",
        price: 850000,
        title: "King Arthur Ct of Klamath Falls",
        preview:
          "A warm welcome and country comforts await those looking to relax.",
        description:
          "Located at the heart of village life in Reynoldston on the beautiful Gower peninsula, the King Arthur is a true country Inn with comfortable rooms and luxury self catering apartments it is also an award-winning wedding venue.",
        area: 1035,
        bedrooms: 2,
        bathrooms: 1,
        location_id: 5,
        agent_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "apartment",
        offer: "rent",
        price: 4600,
        title: "Coronado Apartments",
        preview: "Historic buildings the site for your adventures in the 'Lou.",
        description:
          "Our apartment homes come with free internet access, free extended basic cable, all inclusive utilities in most units, washer and dryer facilities in every building, and unique amenities that you won't find anywhere else in St. Louis. All of our units come complete with spacious closets, central air conditioning, and stylish flooring. With a rooftop swimming pool, 4 parking garages, private fitness, group study areas, and rec room.",
        area: 970,
        bedrooms: 4,
        bathrooms: 2,
        location_id: 6,
        agent_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "townhouse",
        offer: "sale",
        price: 3890000,
        title: "Gateway West Loop",
        preview:
          "Situated in the desirable location of West Loop, this community sits on the pulse of Chicago living.",
        description:
          "An unparalleled living experience awaits you at Gateway West Loop, a sky-high community boasting amenities fit for a resort. These apartments range from micro-studios to two-bedroom floor plans, each tailored to meet your specific needs. As an LEED-certified, smoke-free, and pet-friendly community, Gateway West Loop prioritizes your comfort.",
        area: 1620,
        bedrooms: 5,
        bathrooms: 2,
        location_id: 7,
        agent_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "apartment",
        offer: "rent",
        price: 950,
        title: "The Breeze Way",
        preview:
          "For your comfortable accommodation is offered only one room type - apartment.",
        description:
          "Comfortable apartment for 4 people in central Brighton with a sea view. The apartment consist of a double bed, sofa bed in the living room, kitchen and the bathroom. The kitchen is fully equipped: fridge, microwave, washing machine, etc. Guests have access to a TV and high-speed Wi-Fi. Guests have at their disposal a hair dryer, shampoo, shower gel and soap of a luxury cosmetic line.",
        area: 750,
        bedrooms: 1,
        bathrooms: 1,
        location_id: 8,
        agent_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "townhouse",
        offer: "sale",
        price: 9500000,
        title: "Grand at the Dominion",
        preview:
          "This is San Antonio living at its best – where urban convenience and luxury lifestyle meet.",
        description:
          "Take your lifestyle to the next level in a luxury apartment community located at the center of an exclusive neighborhood. Grand at the Dominion Apartments offers modern finishes and a long list of upscale amenities, all tailor-made to you. Breeze into our one, two and three bedroom apartment homes featuring bright, open layouts, private patio or balcony spaces, hardwood-style flooring, granite countertops, GE stainless steel appliances and breathtaking views of the Texas Hill Country. Explore it all in our gallery of photos, and find your way home to Grand at the Dominion Apartments.",
        area: 2280,
        bedrooms: 6,
        bathrooms: 3,
        location_id: 9,
        agent_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Properties", null, {});
  },
};
