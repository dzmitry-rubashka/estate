import { PropertyInfo } from "../index.js";

import "./property-list.css";

export default function PropertyList({ properties, handleDelete, handleEdit }) {
  return (
    <div className="property-list">
      {properties &&
        properties.map((property) => (
          <div className="property-item" key={property.id}>
            <PropertyInfo
              messagesLength={property.messageCount}
              property={property}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ))}
    </div>
  );
}
