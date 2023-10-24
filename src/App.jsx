import React, { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/Container/Container";
import ButtonChart from "./components/ButtonChart/ButtonChart";
import ResetButton from "./components/ResetButton/ResetButton";
import ReactConfetti from "react-confetti";
import Modal from "./components/Modal/Modal";
import Data from "./data/labelCategories";

export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isSpinFinished, setIsSpinFinished] = useState(false);
  const [containerHeight, setContainerHeight] = useState("75vh");
  const [isOpen, setIsOpen] = useState(false);
  const [dataset, setDataset] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setConfetti(false);
    setIsOpen(false);
  };
  const handleCategorySelection = (categoryIndex) => {
    setConfetti(true);
    const options = Data[categoryIndex].labels;
    const labelArray = options.map((item) => item.label);
    setDataset(labelArray);
    toast(`${Data[categoryIndex].category} selected!`, {
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

  const handleFirst = () => {
    handleCategorySelection(0);
  };

  const handleSecond = () => {
    handleCategorySelection(1);
  };

  const handleThird = () => {
    handleCategorySelection(2);
  };

  const handleFourth = () => {
    handleCategorySelection(3);
  };

  const handleFifth = () => {
    handleCategorySelection(4);
  };

  const handleResetButtonClick = () => {
    setIsSpinning(false);
    setIsSpinFinished(false);
    setIsCategorySelected(false);
    setContainerHeight("75vh");
  };

  const startSpin = () => {
    setIsSpinning(true);
    setContainerHeight("90vh");
    setTimeout(() => {
      setIsSpinFinished(true);
    }, 3000);
  };
  const handleChartClick = (data) => {
    if (isSpinning && !(dataset === 0)) {
      toast(`You selected: ${data}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsCategorySelected(true);
    } else if (isSpinning && dataset === 0) {
      toast(`Please choose category!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      return null;
    }
  };
  return (
    <div>
      {(isCategorySelected || confetti) && (
        <ReactConfetti size={8} numberOfPieces={300} gravity={0.03} />
      )}
      <Container>
        <Spinner
          onChartClick={handleChartClick}
          isSpinning={isSpinning}
          pieHeight={containerHeight}
          selectedLabelList={dataset}
        />
        {isSpinFinished ? <ButtonChart /> : null}
        {!isSpinning ? <Button startSpin={startSpin} /> : null}
        {isSpinning ? (
          <ResetButton onResetButtonClick={handleResetButtonClick} />
        ) : null}
        <Modal
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleFirst={handleFirst}
          handleSecond={handleSecond}
          handleThird={handleThird}
          handleFourth={handleFourth}
          handleFifth={handleFifth}
        />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default App;
