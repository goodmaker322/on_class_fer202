import { Card, Button, Container } from "react-bootstrap";
const movies = [
  {
    id: 1,
    title: "The Matrix",
    duration: 136,
    director: "Wachowski Sisters",
    rating: 8.7,
  },
  {
    id: 2,
    title: "Inception",
    duration: 148,
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    id: 3,
    title: "The Godfather",
    duration: 180,
    director: "Francis Ford Coppola",
    rating: 8.5,
  },
];

const Movies = () => {
  return (
    <Container className="d-flex py-4 flex-wrap justify-content-between">
      {movies.map((movie) => (
        <Card key={movie.id} style={{ width: "auto" }}>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle>{movie.director}</Card.Subtitle>
            <Card.Text>
              Duration: {movie.duration} <br />
              Rating: {movie.rating}
            </Card.Text>
            <Button> View Showtimes</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default Movies;
