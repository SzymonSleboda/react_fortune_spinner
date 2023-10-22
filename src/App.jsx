import React, { useState, useRef } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/Container/Container";
import ButtonChart from "./components/ButtonChart/ButtonChart";

export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [containerHeight, setContainerHeight] = useState("75vh");
  const buttonRef = useRef(null);
  const handleChartButtonClick = () => {
    setIsSpinning(false);
    setContainerHeight("75vh");
    notify();
  };

  const notify = () =>
    toast("Placeholder", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const startSpin = () => {
    setIsSpinning(true);
    setContainerHeight("90vh");
  };

  return (
    <div>
      <Container>
        <Spinner isSpinning={isSpinning} pieHeight={containerHeight} />
        {isSpinning ? (
          <ButtonChart
            ref={buttonRef}
            onChartButtonClick={handleChartButtonClick}
          />
        ) : null}
        {!isSpinning ? <Button startSpin={startSpin} /> : null}
      </Container>
      <ToastContainer />
    </div>
  );
};

export default App;
