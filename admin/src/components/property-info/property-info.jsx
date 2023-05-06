import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Modal, EditPropertyForm, Icon } from "../index.js";
import PropertyGallery from "./property-info__gallery/property-info__gallery.jsx";
import PropertyInfoAmenities from "./property-info__meta-components/property-info__meta-components.jsx";
import PropertyInfoPhoto from "./property-info__photo/property-info__photo.jsx";
import PropertyInfoText from "./property-info__text/property-info__text.jsx";

import "./property-info.css";

export default function PropertyInfo({
  property,
  handleDelete,
  handleEdit,
  messagesLength,
}) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const toggleDeleteModal = () => {
    setIsOpenDelete((prev) => !prev);
  };
  const toggleEditModal = () => {
    setIsOpenEdit((prev) => !prev);
  };
  return (
    <div className="property-info">
      <Modal isOpen={isOpenEdit} toggleModal={toggleEditModal}>
        <EditPropertyForm property={property} handleEdit={handleEdit} />
      </Modal>
      <Link to={`/properties/${property.id}`}>
        <PropertyInfoPhoto
          propertyType={property.type}
          offerType={property.offer}
          price={property.price}
          photoUrl={property.photos[0].photo_url}
        />
        <div className="property-info__description">
          <div className="property-info__messages">
            <Icon iconType="messages" />
            {messagesLength}
          </div>
          <PropertyInfoText
            title={property.title}
            location={`${property.Location.city} ${property.Location.country}`}
          />
          <PropertyInfoAmenities
            propertyType={property.type}
            area={property.area}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            propertyID={property.id}
          />
        </div>
      </Link>
      <PropertyGallery
        photos={property.photos.map((photo) => photo.photo_url)}
      />
      <div className="property-info__buttons-container">
        <Button className="no-border" value="edit" onClick={toggleEditModal} />
        <Button
          className="no-border"
          value="delete"
          onClick={toggleDeleteModal}
        />
      </div>
      <Modal isOpen={isOpenDelete} toggleModal={toggleDeleteModal}>
        <div className="property-info__modal">
          Are you sure you want to delete this property ?
          <Button
            className="property-info__button"
            value="yes"
            onClick={() => handleDelete(property.id)}
          />
          <Button
            className="property-info__button"
            value="cancel"
            onClick={toggleDeleteModal}
          />
        </div>
      </Modal>
    </div>
  );
}
