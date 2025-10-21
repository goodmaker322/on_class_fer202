import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
<<<<<<< HEAD
=======
import { Routes, Route, Link } from "react-router-dom";

>>>>>>> 2f7710f640d085dd945814207a86e36583a3abe0
const Header = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        className="d-flex justify-content-between">
        <NavbarBrand>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ height: "80px", width: "160px" }}
          />
          <Nav className="me-auto">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Feature</NavLink>
            <NavLink href="#">Pricing</NavLink>

            <Form style={{ display: "flex", alignItems: "center" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Nav>
        </NavbarBrand>
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
