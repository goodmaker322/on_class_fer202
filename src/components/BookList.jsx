import { useState } from "react";
import {
  Card,
  Button,
  Form,
  Dropdown,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import books from "../assets/books";

const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categories = [
    "All Categories",
    ...Array.from(new Set(books.map((book) => book.category))),
  ];

  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const authors = [
    "All Authors",
    ...Array.from(new Set(books.map((book) => book.author))),
  ];

  const [searchTitle, setSearchTitle] = useState("");

  const [displayBooks, setDisplayBooks] = useState(books);
  const handleBorrowButtonClick = () => {
    const filteredBooks = books.filter(
      (book) =>
        (selectedCategory === "All Categories" ||
          book.category === selectedCategory) &&
        (selectedAuthor === "All Authors" || book.author === selectedAuthor) &&
        (searchTitle.trim() === "" ||
          book.title.toLowerCase().startsWith(searchTitle.toLowerCase()) ||
          book.title.toLowerCase().includes(searchTitle.toLowerCase()))
    );
    setDisplayBooks(filteredBooks);
  };

  // const filteredBooks = books.filter(
  //   (book) =>
  //     (selectedCategory === "All Categories" ||
  //       book.category === selectedCategory) &&
  //     (selectedAuthor === "All Authors" || book.author === selectedAuthor) &&
  //     (searchTitle.trim() === "" ||
  //       book.title.toLowerCase().startsWith(searchTitle.toLowerCase()))
  // );

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100 text-start"
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #ced4da",
                borderRadius: "6px",
                boxShadow: "none",
                height: "40px",
                fontWeight: 500,
              }}>
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {categories.map((category) => (
                <Dropdown.Item
                  key={category}
                  onClick={() => setSelectedCategory(category)}>
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100 text-start"
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #ced4da",
                borderRadius: "6px",
                boxShadow: "none",
                height: "40px",
                fontWeight: 500,
              }}>
              {selectedAuthor}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {authors.map((author) => (
                <Dropdown.Item
                  key={author}
                  onClick={() => setSelectedAuthor(author)}>
                  {author}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} md={4} lg={6}>
          <Form className="d-flex gap-2">
            <Form.Control
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              placeholder="Enter title to search"
            />
          </Form>
          <div className="d-flex justify-content-end mt-4">
            <Button variant="success">Borrow</Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-4 d-flex justify-content-start">
        {displayBooks.map((book) => (
          <Col key={book.id} className="mb-4" xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 d-flex flex-column align-items-center">
              <Card.Img
                variant="top"
                src={`/Images/${book.image}`}
                style={{
                  height: "180px",
                  objectFit: "fill",
                  border: "10px",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between w-100">
                <Card.Title>
                  <strong>{book.title}</strong>
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Author: </strong> {book.author}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Category: </strong> {book.category}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Rating: </strong>
                      {book.rating}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Available Copies: </strong>
                      {book.availableCopies}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Total Copies: </strong>
                      {book.totalCopies}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
