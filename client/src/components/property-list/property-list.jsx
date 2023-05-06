import { PropertyListItem } from "../index.js";

import "./property-list.css";

export default function PropertyList({ view = "grid", properties }) {
  if (properties !== undefined)
    return (
      <div className={`property_list-${view}`}>
        {properties.map((property) => (
          <PropertyListItem key={property.id} {...property} view={view} />
        ))}
      </div>
    );
  return (
    <div className={`property_list-${view}`}>
      Sorry, no properties match your search criteria
    </div>
  );
}
