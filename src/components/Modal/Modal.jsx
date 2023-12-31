import React from "react";
import s from "./Modal.module.css";
import Icon from "../../data/icons.svg";
import Data from "../../data/labelCategories";

const Modal = ({ handleOpen, handleClose, isOpen, categoryHandler }) => {
  const categoriesArray = () => {
    const array = Data.map((item) => item.category);
    return array;
  };
  const currentArray = categoriesArray();

  return (
    <div>
      {isOpen && <div className={s.overlay} onClick={handleClose}></div>}
      <button className={s.menu_open} onClick={handleOpen}>
        <svg className={`${s.svg_open} ${isOpen ? s.is_hidden : ""}`}>
          <use href={Icon + "#icon-burger-icon"}></use>
        </svg>
      </button>
      <div className={`${s.menu_container} ${isOpen ? s.is_open : ""}`}>
        <button className={s.menu_close} onClick={handleClose}>
          <svg className={s.svg_close}>
            <use href={Icon + "#icon-close-icon"}></use>
          </svg>
        </button>
        <ul>
          <li>
            <h2>Categories:</h2>
          </li>
          {currentArray.map((category, index) => {
            return (
              <li key={index} onClick={() => categoryHandler(index)}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
