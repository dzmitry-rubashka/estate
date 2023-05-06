import { Button } from "../index.js";

import "./modal.css";

export default function Modal({ isOpen, toggleModal, children }) {
  return (
    <aside
      className={isOpen ? "modal active" : "modal"}
      onClick={(e) => {
        if (e.target.className === "modal active") {
          toggleModal();
        }
      }}
    >
      <div className="modal__modal-wrapper">
        <Button
          className="modal__exit-button"
          value="╳"
          onClick={toggleModal}
        />
        {children}
      </div>
    </aside>
  );
}
