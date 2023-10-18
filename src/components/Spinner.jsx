import s from "./Spinner.module.css";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import "animate.css";
Chart.register(ArcElement, Tooltip);
const handlePointHover = (event) => {
  event.target.style.cursor = "pointer";
};
const Spinner = () => {
  const state = {
    labels: [
      "January",
      "February",
      "April",
      "May",
      "Ziemlich",
      "Ziemniak",
      "Niemożliwe",
      "Możliwe",
      "Goblin",
      "niue",
    ],
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      },
    ],
  };
  return (
    <div className={s.container}>
      <Pie className={s.pie} data={state} onElementsHover={handlePointHover} />
      <div className={`${s.arrow}`}></div>
      <button className={s.button}>Zakręć!</button>
    </div>
  );
};
export default Spinner;
