import "./amenities__amenity.css";

export default function Amenity({ amenity, condition }) {
  const conditionSign = condition ? "✓" : "✗";
  return (
    <li className="amenities__amenity">
      <strong className="amenities__amenity_sign">{conditionSign}</strong>{" "}
      {amenity}
    </li>
  );
}
