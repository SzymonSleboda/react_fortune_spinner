import React, { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/Container/Container";
import ButtonChart from "./components/ButtonChart/ButtonChart";
import ResetButton from "./components/ResetButton/ResetButton";

export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [containerHeight, setContainerHeight] = useState("75vh");
  const handleChartButtonClick = () => {
    setIsSpinning(false);
    setContainerHeight("75vh");
  };

  const startSpin = () => {
    setIsSpinning(true);
    setContainerHeight("90vh");
  };
  const handleChartClick = (clickedData) => {
    console.log(clickedData);
    toast(`You selected: ${clickedData}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <Container>
        <Spinner
          onChartClick={handleChartClick}
          isSpinning={isSpinning}
          pieHeight={containerHeight}
        />
        {isSpinning ? <ButtonChart /> : null}
        {!isSpinning ? <Button startSpin={startSpin} /> : null}
        {isSpinning ? (
          <ResetButton onResetButtonClick={handleChartButtonClick} />
        ) : null}
      </Container>
      <ToastContainer />
    </div>
  );
};

export default App;
