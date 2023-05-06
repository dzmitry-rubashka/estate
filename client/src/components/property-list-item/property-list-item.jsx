import PropertyListItemAmenities from "./property-list-item__amenities/property-list-item__amenities.jsx";
import PropertyListItemPhoto from "./property-list-item__photo/property-list-item__photo.jsx";
import PropertyListItemText from "./property-list-item__text/property-list-item__text.jsx";

import "./property-list-item.css";

export default function PropertyListItem({
  id,
  photos,
  type,
  offer,
  price,
  title,
  Location,
  preview,
  area,
  bedrooms,
  bathrooms,
  view = "grid",
}) {
  const fullLocation = `${Location.city}, ${Location.country}`;

  return (
    <div className={`property-list-item__container-${view}`}>
      <PropertyListItemPhoto
        propertyID={id}
        photoUrl={photos[0].photo_url}
        propertyType={type}
        offerType={offer}
        price={price}
      />
      <div className={`property-list-item__text-content-${view}`}>
        <PropertyListItemText
          title={title}
          location={fullLocation}
          preview={preview}
        />
        <PropertyListItemAmenities
          area={area}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
        />
      </div>
    </div>
  );
}
