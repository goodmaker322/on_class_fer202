import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <NavbarBrand>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ height: "40px", width: "80px" }}
          />
        </NavbarBrand>
        <Nav className="me-auto">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Feature</NavLink>
          <NavLink href="#">Pricing</NavLink>
        </Nav>
        <Form className="d-flex ms-auto" style={{ alignItems: "center" }}>
          <FormControl type="text" placeholder="Search" className="me-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <Routes>
        <Route path="/home" element={<h2>Home Page</h2>} />
        <Route path="/feature" element={<h2>Feature Page</h2>} />
        <Route path="/pricing" element={<h2>Pricing Page</h2>} />
      </Routes>
    </div>
  );
};
export default Header;
