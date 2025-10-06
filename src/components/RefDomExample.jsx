import React, { useRef, useEffect } from "react";
import { Button, FormControl } from "react-bootstrap";
const RefDomExample = () => {
  // Thường khi dùng ref truy xuất DOM giá trị khởi tạo sẽ là null
  const inputRef = useRef(null);
  const getInputValue = () => {
    console.log("Giá trị của input:", inputRef.current.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  const renderInputValue = () => {
    const getInputValue = document.getElementById("inputvalue");
    if (getInputValue && inputRef.current) {
      getInputValue.textContent = inputRef.current.value;
    }
  };
  return (
    <div>
      <FormControl type="text" ref={inputRef} onChange={renderInputValue} />
      <p id="inputvalue"></p>
      {/* <input type="text" ref={inputRef} /> */}
      <Button variant="primary" onClick={getInputValue}>
        Log Input Value
      </Button>
      <Button variant="primary" onClick={focusInput}>
        Focus Input
      </Button>
    </div>
  );
};
export default RefDomExample;
