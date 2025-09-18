import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import books from "../assets/books";

const BookList = () => {
  return (
    <Container className="d-flex gap-4 py-4 flex-wrap justify-content-start">
      {books.map((book) => (
        <Card
          key={book.id}
          className="h-100 d-flex flex-column align-items-center"
          style={{ width: "220px", minHeight: "420px" }}>
          <Card.Img
            variant="top"
            src={`/images/${book.image}`}
            alt={book.title}
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              marginTop: "16px",
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between w-100">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Author:{book.author}
              <br />
              Category:{book.category}
              <br />
              Rating: {book.rating}
              <br />
              Avariable Copies:{book.availableCopies}
              <br />
              Total Copies:{book.totalCopies}
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default BookList;
