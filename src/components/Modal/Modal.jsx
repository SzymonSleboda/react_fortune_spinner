import React from "react";
import s from "./Modal.module.css";
import Icon from "../../data/icons.svg";
import Data from "../../data/labelCategories";

const Modal = ({ handleOpen, handleClose, isOpen }) => {
  const handleIsOpen = () => {
    handleOpen();
  };
  const handleIsClose = () => {
    handleClose();
  };

  return (
    <div>
      {isOpen && <div className={s.overlay} onClick={handleIsClose}></div>}
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

        <ul>
          <li>
            <h2>Categories:</h2>
          </li>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
// {Data.map((category, index) => (
//   <div key={index}>
//     <h2>{Object.keys(category)[0]}</h2>
//     <ul>
//       {category[Object.keys(category)[0]].map((item, i) => (
//         <li key={i}>{item.label}</li>
//       ))}
//     </ul>
//   </div>
// ))}
// render danych
