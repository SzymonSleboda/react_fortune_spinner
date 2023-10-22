import React from "react";
import s from "./ResetButton.module.css";
const ResetButton = ({ onResetButtonClick }) => {
  const handleButtonClick = () => {
    onResetButtonClick();
  };
  return (
    <div className={s.button} onClick={handleButtonClick}>
      <span className={s.buttonText}>Reset!</span>
    </div>
  );
};
export default ResetButton;
