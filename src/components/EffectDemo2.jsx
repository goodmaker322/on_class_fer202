import React, { useState } from "react";
import Counter from "./Counter";
const EffectDemo2 = () => {
  const [showCounter, setShowCounter] = useState(true);
  const toggleCounter = () => {
    setShowCounter((prevShowCounter) => !prevShowCounter);
  };
  return (
    <div>
      {showCounter && <Counter />}
      <button onClick={toggleCounter}>Toggle Counter</button>
    </div>
  );
};
export default EffectDemo2;
