import "./amenities__amenity.css";

export default function Amenity({ amenity, condition }) {
  return (
    <li className="amenities__amenity">
      <strong className="amenities__amenity_sign">
        {condition ? "✓" : "✗"}
      </strong>{" "}
      {amenity}
    </li>
  );
}
