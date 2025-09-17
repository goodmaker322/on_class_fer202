import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

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
    </div>
  );
};
export default Header;
