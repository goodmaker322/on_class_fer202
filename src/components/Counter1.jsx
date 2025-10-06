import React, { useState, useRef, useEffect } from "react";
export default function Counter1() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bạn đã bấm: {count} lần</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}
