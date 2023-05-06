import { useState } from "react";

import { Button, AddPropertyForm, Modal } from "../index.js";

import "./new-property.css";

export default function NewProperty({ handleCreateProperty }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="new-property">
      <Button
        className="new-property__add-button"
        value="+"
        onClick={toggleModal}
      />
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <AddPropertyForm
          className="new-property__form"
          handleCreateProperty={handleCreateProperty}
        />
      </Modal>
    </section>
  );
}
