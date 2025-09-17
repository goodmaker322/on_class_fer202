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
    </div>
  );
};
export default Header;
