import Amenity from "./amenities__amenity/amenities__amenity.jsx";

import "./amenities__amenity/amenities.css";

export default function Amenities({ amenities }) {
  return (
    <ul className="amenities">
      {Object.keys(amenities).map((amenity) => (
        <Amenity
          key={amenity}
          amenity={amenity}
          condition={amenities[amenity]}
        />
      ))}
    </ul>
  );
}
