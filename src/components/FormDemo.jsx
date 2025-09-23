import { useState } from "react";
import { Form, Button, Alert, Container, Table } from "react-bootstrap";

const FormDemo = () => {
  const init = {
    code: "12",
    name: "Mr A",
    gender: "Male",
  };
  const [student, setStudent] = useState(init);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Container>
      <Alert>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Code</Form.Label>
            <Form.Control
              name="code"
              value={student.code}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              name="name"
              value={student.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="d-flex align-items-center">
              <Form.Label className="mb-0 me-3" style={{ minWidth: 70 }}>
                Gender
              </Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  value="Male"
                  checked={student.gender === "Male"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value="Female"
                  checked={student.gender === "Female"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Form.Group>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.code}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
            </tr>
          </tbody>
        </Table>
      </Alert>
    </Container>
  );
};
export default FormDemo;
