import { useState, useEffect } from "react";
import { Table, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [directors, setDirectors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [producers, setProducers] = useState([]);
  const [stars, setStars] = useState([]);
  const [movieStars, setMovieStars] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");

  // Get director ID from URL params if exists
  const { directorId } = useParams();

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [directorsRes, moviesRes, producersRes, starsRes, movieStarsRes] =
          await Promise.all([
            fetch("http://localhost:9999/directors"),
            fetch("http://localhost:9999/movies"),
            fetch("http://localhost:9999/producers"),
            fetch("http://localhost:9999/stars"),
            fetch("http://localhost:9999/movie_star"),
          ]);

        const directorsData = await directorsRes.json();
        const moviesData = await moviesRes.json();
        const producersData = await producersRes.json();
        const starsData = await starsRes.json();
        const movieStarsData = await movieStarsRes.json();

        setDirectors(directorsData);
        setMovies(moviesData);
        setProducers(producersData);
        setStars(starsData);
        setMovieStars(movieStarsData);
        setFilteredMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Set selected director from URL parameter
  useEffect(() => {
    if (directorId) {
      setSelectedDirector(parseInt(directorId));
    }
  }, [directorId]);

  // Search movies in real-time when searchTitle changes
  useEffect(() => {
    let filtered = movies;

    // Apply search filter - Clean title before comparing
    if (searchTitle.trim() !== "") {
      filtered = filtered.filter((movie) => {
        const cleanTitle = movie.Title.replace(/\r\n/g, "").trim();
        return cleanTitle
          .toLowerCase()
          .startsWith(searchTitle.toLowerCase().trim());
      });
    }

    // Apply director filter
    if (selectedDirector !== null) {
      filtered = filtered.filter(
        (movie) => movie.DirectorId === selectedDirector
      );
    }

    setFilteredMovies(filtered);
  }, [searchTitle, selectedDirector, movies]);

  // Get producer name by ID
  const getProducerName = (producerId) => {
    const producer = producers.find((p) => p.id === producerId);
    return producer ? producer.Name : "Unknown Producer";
  };

  // Get stars names for a movie
  const getMovieStars = (movieId) => {
    console.log(`Getting stars for movie ID: ${movieId}`);

    // Step 1: Find all movie_star relations where MovieId matches movie.id
    const movieStarRelations = movieStars.filter(
      (ms) => ms.MovieId === movieId
    );

    console.log(
      `Found ${movieStarRelations.length} star relations for movie ${movieId}:`,
      movieStarRelations
    );

    if (movieStarRelations.length === 0) {
      return "No stars found";
    }

    // Step 2: For each relation, find the star where movie_star.StarId = star.id
    const starNames = movieStarRelations
      .map((relation) => {
        console.log(
          `Looking for star with ID ${
            relation.StarId
          } (type: ${typeof relation.StarId})`
        );

        // Direct comparison: movie_star.StarId should equal star.id
        // Handle both string and number types
        const star = stars.find((s) => {
          // Convert both to string for consistent comparison
          const starId = String(s.id);
          const relationStarId = String(relation.StarId);

          console.log(
            `Comparing star.id="${starId}" with relation.StarId="${relationStarId}"`
          );

          return starId === relationStarId;
        });

        console.log(`Found star:`, star);

        if (star && star.FullName) {
          // Clean up the name: remove \r\n and extra whitespace
          const cleanName = star.FullName.replace(/\r\n/g, "").trim();
          console.log(`Clean name: "${cleanName}"`);
          return cleanName;
        }

        console.log(`No valid star found for StarId ${relation.StarId}`);
        return null;
      })
      .filter((name) => name !== null && name !== "");

    console.log(`Final star names for movie ${movieId}:`, starNames);

    return starNames.length > 0 ? starNames.join(", ") : "No stars found";
  };

  // Filter movies by director
  const handleDirectorClick = (directorId) => {
    if (selectedDirector === directorId) {
      setSelectedDirector(null);
    } else {
      setSelectedDirector(directorId);
    }
    // Clear search when filtering by director
    setSearchTitle("");
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedDirector(null);
    setSearchTitle("");
  };

  // Handle search input change (real-time search)
  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
    // Clear director selection when searching
    setSelectedDirector(null);
  };

  return (
    <Container className="my-4">
      <div className="text-center mb-6">
        <h3>Movies Management</h3>
      </div>

      <Row>
        {/* Directors Section */}
        <Col md={3}>
          <h5>Directors</h5>
          <ul className="list-unstyled">
            {directors.map((director) => (
              <li key={director.id} className="mb-1">
                <Button
                  variant="link"
                  className="text-primary p-0 text-start"
                  onClick={() => handleDirectorClick(director.id)}
                  style={{
                    textDecoration:
                      selectedDirector === director.id ? "underline" : "none",
                    fontWeight:
                      selectedDirector === director.id ? "bold" : "normal",
                  }}>
                  {director.FullName}
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="sm" onClick={resetFilters}>
            Show All Movies
          </Button>
        </Col>

        {/* Movies Table Section */}
        <Col md={9}>
          {/* Search Bar */}
          <Row className="mb-3 justify-content-center">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Enter movie title to search"
                value={searchTitle}
                onChange={handleSearchChange}
              />
            </Col>
          </Row>

          {/* Movies Table */}
          <Table striped bordered hover responsive>
            <thead className="table-light">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Release Date</th>
                <th>Description</th>
                <th>Language</th>
                <th>Producer</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.Title.replace(/\r\n/g, "").trim()}</td>
                  <td>{movie.ReleaseDate}</td>
                  <td>{movie.Description}</td>
                  <td>{movie.Language}</td>
                  <td>{getProducerName(movie.ProducerId)}</td>
                  <td>{getMovieStars(movie.id)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {filteredMovies.length === 0 && (
            <div className="text-center text-muted mt-3">
              <p>No movies found matching your criteria.</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
