import React from "react";
import s from "./Modal.module.css";
import Icon from "../../data/icons.svg";

const Modal = ({
  handleOpen,
  handleClose,
  isOpen,
  handleFood,
  handleFunTimeDay,
  handleFunTimeEvening,
  handleRestaurants,
  handleSurprise,
}) => {
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
          <li onClick={handleFood}>Food</li>
          <li onClick={handleFunTimeDay}>Fun Time Day</li>
          <li onClick={handleFunTimeEvening}>Fun Time Evening</li>
          <li onClick={handleRestaurants}>Restaurants</li>
          <li onClick={handleSurprise}>Surprise Me!</li>
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
