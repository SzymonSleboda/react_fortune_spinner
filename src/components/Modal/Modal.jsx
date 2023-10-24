import React from "react";
import s from "./Modal.module.css";
import Icon from "../../data/icons.svg";

const Modal = ({ handleOpen, handleClose, isOpen }) => {
  const handleIsOpen = () => {
    handleOpen();
  };
  const handleIsClose = () => {
    handleClose();
  };
  return (
    <div>
      <button className={s.menu_open} onClick={handleIsOpen}>
        <svg className={`${s.svg_open} ${isOpen ? s.is_hidden : ""}`}>
          <use href={Icon + "#icon-burger-icon"}></use>
        </svg>
      </button>
      <div className={`${s.menu_container} ${isOpen ? s.is_open : ""}`}>
        <button className={s.menu_close} onClick={handleIsClose}>
          <svg className={s.svg_close}>
            <use href={Icon + "#icon-close-icon"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
