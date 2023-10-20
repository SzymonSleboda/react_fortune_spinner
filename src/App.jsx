import React from "react";
import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
export const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 10000);
  };
  return (
    <div>
      <Spinner isSpinning={isSpinning} />
      <Button startSpin={startSpin} />
    </div>
  );
};
export default App;
