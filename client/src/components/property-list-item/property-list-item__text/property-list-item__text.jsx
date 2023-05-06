import "./property-list-item__text.css";

export default function PropertyListItemText({ title, location, preview }) {
  return (
    <>
      <h3 className="property-list-item__title">{title}</h3>
      <h4 className="property-list-item__location">{location}</h4>
      <hr />
      <p className="property-list-item__description">{preview}</p>
    </>
  );
}
