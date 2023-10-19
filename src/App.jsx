import React from "react";
import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    setIsSpinning(true);

    // Po 5 sekundach zatrzymaj obrót
    setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
  };
  return (
    <div>
      <Spinner isSpinning={isSpinning} />
      <Button startSpin={startSpin} />
    </div>
  );
};
export default App;
