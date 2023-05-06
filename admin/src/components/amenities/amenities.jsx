import Amenity from "./amenities__amenity/amenities__amenity.jsx";

import "./amenities__amenity/amenities.css";

export default function Amenities({ amenities }) {
  return (
    <section className="amenities__section">
      <hr className="amenities__hr" />
      <ul className="amenities__list">
        {Object.keys(amenities).map((amenity) => (
          <Amenity
            key={amenity}
            amenity={amenity}
            condition={amenities[amenity]}
          />
        ))}
      </ul>
    </section>
  );
}
