import Gallery from "../gallery/gallery";
import MetaComponent from "./property-info__meta-component/property-info__meta-component";

import "./property-info.css";

export default function PropertyInfo({
  title,
  Location,
  type,
  area,
  bedrooms,
  bathrooms,
  id,
  description,
  offer,
  price,
  photos,
}) {
  const fullLocation = `${Location.city} ${Location.country}`;
  const imageArray = photos.map((photo) => photo.photo_url);
  return (
    <div className="property-info">
      <h2 className="property-info__title">{title}</h2>
      <p className="property-info__location">{fullLocation}</p>
      <div className="property-info__meta-content">
        <MetaComponent
          iconType={type}
          iconHeight="24px"
          iconWidth="24px"
          metaComponent={type}
        />
        <MetaComponent
          iconType="area"
          iconHeight="22px"
          iconWidth="22px"
          metaComponent={area}
          ft="ft&#178;"
        />
        <MetaComponent
          iconType="bed"
          iconHeight="20px"
          iconWidth="30px"
          metaComponent={bedrooms}
        />
        <MetaComponent
          iconType="bathroom"
          iconHeight="20px"
          iconWidth="30px"
          metaComponent={bathrooms}
        />
        <MetaComponent metaComponentDescription="ID" metaComponent={id} />
      </div>
      <Gallery
        arrayImages={imageArray}
        propertyType={type}
        offerType={offer}
        price={price}
      />
      <p className="property-info__description">{description}</p>
    </div>
  );
}
