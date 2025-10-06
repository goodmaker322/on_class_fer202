import { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";

const ExCountDown = () => {
  const [countdown, setCountdown] = useState(10);
  const [countup, setCountUp] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countup < 10) {
        setCountUp((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countup]);

  return (
    <div className="container mt-4">
      <Row justify="center" className="text-center">
        <Col md={3}>
          <Alert>
            <h4>CountDown</h4>
            <h2>{countdown}</h2>
          </Alert>
        </Col>
        <Col md={3}>
          <Alert>
            <h4>CountUp</h4>
            <h2>{countup}</h2>
          </Alert>
        </Col>
      </Row>
    </div>
  );
};

export default ExCountDown;
