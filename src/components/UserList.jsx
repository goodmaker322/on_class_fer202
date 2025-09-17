import { Table } from "react-bootstrap";

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

const UserList = () => {
  return (
    <div className="p-3">
      <h3 className="mb-3">User List</h3>
      <Table striped bordered hover>
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default UserList;
