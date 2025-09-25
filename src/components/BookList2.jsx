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

const BookList2 = () => {
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const category = [
    "All Cateogries",
    ...Array.from(new Set(books.map((book) => book.category))),
  ];

  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const authors = [
    "All Authors",
    ...Array.from(new Set(books.map((book) => book.author))),
  ];

  const [searchValue, setSearchValue] = useState("");

  const [displayBooks, setDisplayBooks] = useState(books);
  const handleBorrowButtonClick = () => {
    const filteredBooks = books.filter(
      (book) =>
        (selectedCat === "All Cateogries" || book.category === selectedCat) &&
        (selectedAuthor === "All Authors" || book.author === selectedAuthor) &&
        (searchValue.trim() === "" ||
          book.title
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()))
    );
    setDisplayBooks(filteredBooks);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
            <Dropdown className="w-100">
              <Dropdown.Toggle>
                {selectedCat}
                <Dropdown.Menu>
                  {category.map((category) => (
                    <Dropdown.Item
                      key={category}
                      onClick={() => setSelectedCat(category)}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
            <Dropdown className="w-100">
              <Dropdown.Toggle>
                {selectedAuthor}
                <Dropdown.Menu>
                  {authors.map((authors) => (
                    <Dropdown.Item
                      key={authors}
                      onClick={() => setSelectedAuthor(authors)}
                    >
                      {authors}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
            <Form>
              <Form.Control
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter title to search"
              />
            </Form>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="success" onClick={handleBorrowButtonClick}>
                Borrow
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          {displayBooks.map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`/Images/${book.image}`} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Author: {book.author}</ListGroup.Item>
                    <ListGroup.Item>Category: {book.category}</ListGroup.Item>
                    <ListGroup.Item>
                      Available Copies: {book.availableCopies}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Total Copies: {book.totalCopies}
                    </ListGroup.Item>
                    <ListGroup.Item>Rating: {book.rating}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default BookList2;
