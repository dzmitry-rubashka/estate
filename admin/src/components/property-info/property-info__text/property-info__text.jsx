import "./property-info__text.css";

export default function PropertyInfoText({ title, location }) {
  return (
    <div className="property-info__text">
      <h3 className="property-info__title">{title}</h3>
      <h4 className="property-info__location">{location}</h4>
    </div>
  );
}
