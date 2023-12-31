import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import s from "./Spinner.module.css";

Chart.register(ArcElement, Tooltip, CategoryScale);

const Spinner = ({
  isSpinning,
  pieHeight,
  pieWidth,
  onChartClick,
  selectedLabelList,
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const minDegrees = 1080;
      const maxDegrees = 7000;

      const randomRotation =
        Math.floor(Math.random() * (maxDegrees - minDegrees + 1)) + minDegrees;
      const degreesRemainder = randomRotation % 36;
      const adjustedRotation = randomRotation - degreesRemainder;

      setRotation(adjustedRotation);
    } else {
      setRotation(0);
    }
  }, [isSpinning]);
  const handleChartClick = (event, elements) => {
    if (elements[0]) {
      const dataIndex = elements[0].index;
      const data = state.labels[dataIndex];
      onChartClick(data);
    }
  };
  const state = {
    labels: selectedLabelList,
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
          "#18005080",
          "#50180080",
          "#4B500080",
          "#17500080",
          "#35014F80",
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
      duration: 3000,
      // easing: "easeInOutCubic",
    },
    onClick: handleChartClick,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className={s.container_primary} style={{ height: pieHeight }}>
      <div
        className={s.container_secondary}
        style={{ height: pieHeight, maxWidth: pieWidth }}
      >
        <Pie
          className={`${s.pie}`}
          options={{
            ...chartOptions,
            rotation: rotation,
          }}
          data={state}
        />
        <div className={s.arrow}></div>
      </div>
    </div>
  );
};

export default Spinner;
