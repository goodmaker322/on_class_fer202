import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container className="my-4">
      <div className="text-center">
        <h2 className="mb-4">Dashboard</h2>
        <div className="mb-3">
          <Button
            variant="success"
            className="me-2"
            onClick={() => handleNavigation("/director")}>
            Directors
          </Button>
          <Button
            variant="info"
            className="me-2"
            onClick={() => handleNavigation("/producer")}>
            Producers
          </Button>
          <Button
            variant="danger"
            className="me-2"
            onClick={() => handleNavigation("/star")}>
            Stars
          </Button>
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => handleNavigation("/genre")}>
            Genres
          </Button>
          <Button variant="warning" onClick={() => handleNavigation("/movie")}>
            Movies
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
