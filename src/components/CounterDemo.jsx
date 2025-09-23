import { useState } from "react";
import { Button } from "react-bootstrap";

const CounterDemo = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot be negative");
    }
  };
  return (
    <div>
      <h2> Counter : {count}</h2>
      <Button variant="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button variant="primary" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};
export default CounterDemo;
