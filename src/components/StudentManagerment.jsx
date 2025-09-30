import { useState } from "react";
import {
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

const students = [
  {
    id: 1,
    studentId: "HE1710001",
    name: "Phạm Hoàng Minh",
    age: 20,
    isRegularStudent: true,
  },
  {
    id: 2,
    studentId: "HE1710002",
    name: "Ngô Thị Hồng",
    age: 19,
    isRegularStudent: false,
  },
  {
    id: 3,
    studentId: "HE1710003",
    name: "Trần Hải Nam",
    age: 21,
    isRegularStudent: true,
  },
  {
    id: 4,
    studentId: "HE1710004",
    name: "Trần Thu Hường",
    age: 20,
    isRegularStudent: false,
  },
];

const StudentManagement = () => {
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const filteredAges = [
    "All Ages",
    ...new Set(students.map((student) => student.age)),
  ];
  const [selectedRegular, setSelectedRegular] = useState("All");
  const filterdRegulars = [
    "All",
    ...new Set(
      students.map((student) =>
        student.isRegularStudent ? "Full time" : "Applicant"
      )
    ),
  ];
  const [searchName, setSearchName] = useState("");
  const [sortType, setSortType] = useState(""); // "" | "name" | "age"
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" | "desc"

  const filteredStudents = students.filter(
    (student) =>
      (selectedAge === "All Ages" || student.age === Number(selectedAge)) &&
      (selectedRegular === "All" ||
        (selectedRegular === "Full time" && student.isRegularStudent) ||
        (selectedRegular === "Applicant" && !student.isRegularStudent)) &&
      student.name.toLowerCase().includes(searchName.trim().toLocaleLowerCase())
  );

  const getFirstName = (fullname) => {
    const arr = fullname.trim().split(" ");
    return arr[arr.length - 1];
  };

  const getLastName = (fullname) => {
    const arr = fullname.trim().split(" ");
    return arr[0];
  };

  // Sort khi render, không dùng useEffect
  const getSortedStudents = () => {
    let sorted = [...filteredStudents];
    if (sortType === "name") {
      sorted.sort((a, b) => {
        const nameA = getFirstName(a.name).toLowerCase();
        const nameB = getFirstName(b.name).toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        const lastNameA = getLastName(a.name).toLowerCase();
        const lastNameB = getLastName(b.name).toLowerCase();
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
      });
    } else if (sortType === "age") {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.age - b.age : b.age - a.age
      );
    }
    return sorted;
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} lg={12}>
          <Form className="mt-2 mb-2">
            <Form.Control
              type="text"
              placeholder="---Search by name---"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </Form>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="mb-2 mt-2">
            <Button className="w-100" onClick={() => setSortType("name")}>
              Sort by name
            </Button>
          </div>
          {/* <div className="mb-2">
            <Button
              className="w-100 mb-2"
              onClick={() => {
                setSortType("age");
                setSortOrder("asc");
              }}
            >
              Sort age asc
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                setSortType("age");
                setSortOrder("desc");
              }}
            >
              Sort age desc
            </Button>
          </div> */}
          <div className="mb-2">
            <Dropdown>
              <Dropdown.Toggle className="w-100" variant="primary">
                Sort by age
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setSortType("age");
                    setSortOrder("asc");
                  }}
                >
                  Sort age asc
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSortType("age");
                    setSortOrder("desc");
                  }}
                >
                  Sort age desc
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100"
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  border: "1px solid #ced4da",
                }}
              >
                {selectedAge}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[
                  filteredAges[0],
                  ...filteredAges
                    .slice(1)
                    .map(Number)
                    .sort((a, b) => a - b),
                ].map((age) => (
                  <Dropdown.Item key={age} onClick={() => setSelectedAge(age)}>
                    {age}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mt-2">
            <Form>
              {filterdRegulars.map((option) => (
                <Form.Check
                  key={option}
                  type="checkbox"
                  label={option}
                  name="regularType"
                  checked={selectedRegular === option}
                  onChange={() => setSelectedRegular(option)}
                  className="mb-1"
                />
              ))}
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={10}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>isRegularStudent</th>
              </tr>
            </thead>
            <tbody>
              {getSortedStudents().map((student) => (
                <tr key={student.id}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    {student.isRegularStudent ? "Full time" : "Applicant"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentManagement;
