import ListProjects from "../assets/projects";
import {
  Button,
  Form,
  Container,
  Table,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState(ListProjects);
  const [selectedProject, setSelectedProject] = useState({
    id: "",
    name: "",
    description: "",
    startDate: "",
    type: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedProjects = [...projects].sort((a, b) => {
      if (key === "startDate") {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === "ascending" ? dateA - dateB : dateB - dateA;
      }
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setProjects(sortedProjects);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectNameBlur = () => {
    if (!selectedProject.name || !selectedProject.name.trim()) {
      // Sửa: name thay vì projectName
      setMessage("Please enter the form fields that are required");
      setMessageType("danger");
    } else {
      setMessage("");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!selectedProject.name || !selectedProject.name.trim()) {
      setMessage("Please enter the form fields that are required");
      setMessageType("danger");
      return;
    }

    // Validation Description
    if (!selectedProject.description || !selectedProject.description.trim()) {
      setMessage("Please enter the form fields that are required");
      setMessageType("danger");
      return;
    }

    // Update project
    const updatedProjects = projects.map((project) =>
      project.id === selectedProject.id ? selectedProject : project
    );
    setProjects(updatedProjects);

    setMessage("Update success");
    setMessageType("success");

    // Clear form
    setTimeout(() => {
      setSelectedProject({
        id: "",
        name: "",
        description: "",
        startDate: "",
        type: "",
      });
      setMessage("");
    }, 2000);
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === "ascending" ? " ↑" : " ↓";
    }
    return "";
  };
  const handleDescriptionBlur = () => {
    if (!selectedProject.description || !selectedProject.description.trim()) {
      setMessage("Please enter the form fields that are required");
      setMessageType("danger");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <Container className="my-4">
        <Row>
          {/* Form Section */}
          <Col md={12} className="mb-4">
            {message && (
              <Alert variant={messageType} className="mb-3">
                {message}
              </Alert>
            )}

            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={selectedProject.name || ""}
                  onChange={handleInputChange}
                  onBlur={handleProjectNameBlur}
                  placeholder="Enter project name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={selectedProject.description || ""}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={selectedProject.startDate || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  onChange={handleInputChange}
                  placeholder="Enter project type"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>

          {/* Table Section */}
          <Col md={12}>
            <Table striped bordered hover responsive>
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSort("name")}
                  >
                    Project name{getSortIcon("name")}
                  </th>
                  <th>Description</th>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSort("startDate")}
                  >
                    Start date{getSortIcon("startDate")}
                  </th>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSort("type")}
                  >
                    Type{getSortIcon("type")}
                  </th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.startDate}</td>
                    <td>{project.type}</td>
                    <td>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleEdit(project)}
                        style={{ color: "#007bff", textDecoration: "none" }}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectList;
