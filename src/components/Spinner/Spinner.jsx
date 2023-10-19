import s from "./Spinner.module.css";
import { Chart, ArcElement, Tooltip, CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, CategoryScale);

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
      "Maybe",
      "Może",
      "Niemożliwe",
      "Możliwe",
      "Goblin",
      "Pizza Pasta",
    ],
    datasets: [
      {
        backgroundColor: [
          "#9B96EF",
          "#F6C2D9",
          "#F3F6C2",
          "#C2F6DF",
          "#DFC2F6",
        ],
        hoverBackgroundColor: [
          "#180050",
          "#501800",
          "#4B5000",
          "#175000",
          "#35014F",
        ],
        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      },
    ],
  };

  const chartOptions = {
    elements: {
      arc: {
        borderColor: "black", 
        borderWidth: 2, 
      },
    },
  };

  return (
    <div className={s.container}>
      <Pie
        className={s.pie}
        options={chartOptions}
        data={state}
        onElementsHover={handlePointHover}
      />
      <div className={s.arrow}></div>
    </div>
  );
};

export default Spinner;
