import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "react-bootstrap";
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

const CardItem = () => {
  return (
    <div className="d-flex gap-5 p-5">
      {movies.map((movie) => (
        <Card key={movie.id} style={{ width: "auto" }}>
          <CardBody>
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle>{movie.director}</CardSubtitle>
            <CardText>
              <strong>Duration:</strong> {movie.duration} <br />
              <strong>Rating: </strong> {movie.rating}
            </CardText>
            <Button> View Showtimes</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default CardItem;
