import React from "react";
import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

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
    setTimeout(() => {
      setIsSpinning(false);
      if (!isSpinning) {
        notify();
      }
    }, 4000);
  };

  return (
    <div>
      <Spinner isSpinning={isSpinning} />
      <Button startSpin={startSpin} />
      <ToastContainer />
    </div>
  );
};
export default App;
