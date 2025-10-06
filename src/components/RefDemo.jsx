import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";

const RefDemo = () => {
  const countRef = useRef(0);
  const countObj = {
    current: 0,
  };
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    countRef.current++;
    countObj.current++;
    setCount(count + 1);
  };
  console.log("count:", count);
  console.log("countRef:", countRef);
  console.log("countObj:", countObj);
  return (
    <>
      <Button variant="primary" onClick={increaseCount}>
        Rerender Example
      </Button>
    </>
  );
};
export default RefDemo;
