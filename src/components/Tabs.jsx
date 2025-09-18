import { useState } from "react";
import { Table, Form, Button, Nav, Row, Col, NavLink } from "react-bootstrap";

const users = [
  {
    id: 1,
    firstname: "Mark",
    lastname: "Otto",
    username: "@mdo",
  },
  {
    id: 2,
    firstname: "Jacob",
    lastname: "Thornton",
    username: "@fat",
  },
  {
    id: 3,
    firstname: "Lary the Bird",
    lastname: " ",
    username: "@twitter",
  },
];

const Tabs = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = () => {
    const keyword = search.trim().toLowerCase();
    if (keyword === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.firstname.toLowerCase().includes(keyword) ||
            user.lastname.toLowerCase().includes(keyword)
        )
      );
    }
  };
  return (
    <Row className="p-3">
      <Col md={3}>
        <Nav className="flex-column " style={{ marginLeft: "center" }}>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Feature</NavLink>
          <NavLink href="#">Pricing</NavLink>
        </Nav>
      </Col>
      <Col md={9}>
        <div className="p-3">
          {/* <div className="d-flex mb-3" style={{ gap: "8px" }}>
            <Form.Control
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </div> */}
          <Table striped bordered hover size="md">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  {user.lastname.trim() === "" ? (
                    <>
                      <td colSpan={2}>{user.firstname}</td>
                    </>
                  ) : (
                    <>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                    </>
                  )}
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};
export default Tabs;
