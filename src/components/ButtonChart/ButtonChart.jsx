import React from "react";
import s from "./ButtonChart.module.css";
const ButtonChart = ({ onChartButtonClick }) => {
  const handleButtonClick = () => {
    onChartButtonClick();
  };
  return (
    <div className={s.button} onClick={handleButtonClick}>
      <span className={s.buttonText}>Click here!</span>
    </div>
  );
};
export default ButtonChart;
