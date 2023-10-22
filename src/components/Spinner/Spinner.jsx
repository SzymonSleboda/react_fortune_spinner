import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import s from "./Spinner.module.css";

Chart.register(ArcElement, Tooltip, CategoryScale);

const Spinner = ({ isSpinning }) => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    if (isSpinning) {
      const minDegrees = 1080;
      const maxDegrees = 7000;
      const randomRotation =
        Math.random() * (maxDegrees - minDegrees) + minDegrees;
      setRotation(randomRotation);
    } else {
      setRotation(0);
    }
  }, [isSpinning]);
  const handleChartClick = (event, elements) => {
    if (elements[0]) {
      // Jeśli istnieje wybrany element, wyświetl jego dane w konsoli
      const dataIndex = elements[0].index;
      console.log("Clicked Element Data:", state.labels[dataIndex]);
    }
  };
  const state = {
    labels: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
      "Option 6",
      "Option 7",
      "Option 8",
      "Option 9",
      "Option 10",
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
    animation: {
      duration: 1500,
      easing: "easeInOutCubic",
    },
    onClick: handleChartClick,
  };

  return (
    <div className={s.container}>
      <Pie
        className={`${s.pie} ${isSpinning ? s.spinning : ""}`}
        options={{
          ...chartOptions,
          rotation: rotation,
        }}
        data={state}
      />
      <div className={s.arrow}></div>
    </div>
  );
};

export default Spinner;
