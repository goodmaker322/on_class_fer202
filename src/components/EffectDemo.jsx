import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function EffectDemo() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const handleIncreaseA = () => {
    setCountA(countA + 1);
  };
  const handleIncreaseB = () => {
    setCountB(countB + 1);
  };

  useEffect(() => {
    console.log("Khong co dependency array");
  });

  useEffect(() => {
    console.log("Co dependency array rong");
  }, []);

  useEffect(() => {
    console.log("Co dependency array countA");
  }, [countA]);

  useEffect(() => {
    console.log("Co dependency array countA va countB");
  }, [countA, countB]);
  return (
    <>
      <h3> Count A : {countA}</h3>
      <h3> Count B : {countB}</h3>

      <Button onClick={handleIncreaseA}> Increase A</Button>
      <Button onClick={handleIncreaseB}> Increase B</Button>
    </>
  );
}
