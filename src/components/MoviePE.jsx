import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MoviePE = () => {
  //State
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [producers, setProducers] = useState([]);
  const [stars, setStars] = useState([]);
  const [movie_stars, setMovie_Stars] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movie_genres, setMovie_Genres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // URL search params for director filter
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDirectorId = searchParams.get("director-id");

  // API base URL
  const API_BASE = "http://localhost:9999";

  // Fetch functions
  const fetchAllData = async () => {
    try {
      setLoading(true);

      const [
        moviesRes,
        directorsRes,
        producersRes,
        starsRes,
        movie_starsRes,
        genresRes,
        movie_genresRes,
      ] = await Promise.all([
        axios.get(`${API_BASE}/movies`),
        axios.get(`${API_BASE}/directors`),
        axios.get(`${API_BASE}/producers`),
        axios.get(`${API_BASE}/stars`),
        axios.get(`${API_BASE}/movie_star`),
        axios.get(`${API_BASE}/genres`),
        axios.get(`${API_BASE}/movie_genre`),
      ]);

      setMovies(moviesRes.data);
      setDirectors(directorsRes.data);
      setProducers(producersRes.data);
      setStars(starsRes.data);
      setMovie_Stars(movie_starsRes.data);
      setGenres(genresRes.data);
      setMovie_Genres(movie_genresRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Handle director filter click
  const handleDirectorClick = (directorId) => {
    if (selectedDirectorId === directorId.toString()) {
      // If same director clicked, remove filter
      setSearchParams({});
    } else {
      // Set new director filter
      setSearchParams({ "director-id": directorId });
    }
  };

  //join data function
  const getMoviesWithDetails = () => {
    return movies.map((movie) => {
      // Get producer name
      const producer = producers.find(
        (producer) => producer.id == movie.ProducerId
      );
      const producerName = producer ? producer.Name : "Unknown Producer";

      // Get stars for this movie
      const movieStarIds = movie_stars
        .filter((ms) => ms.MovieId == movie.id)
        .map((ms) => ms.StarId);

      const movieStarNames = movieStarIds
        .map((starId) => {
          const star = stars.find((s) => s.id == starId);
          return star ? star.FullName : "";
        })
        .filter((name) => name !== "")
        .join(", ");

      return {
        ...movie,
        ProducerName: producerName,
        StarNames: movieStarNames,
      };
    });
  };

  // Filter movies by search term and director
  const filteredMovies = getMoviesWithDetails().filter((movie) => {
    const matchesSearch = movie.Title.toLowerCase().startsWith(
      searchTerm.toLowerCase()
    );
    const matchesDirector = selectedDirectorId
      ? movie.DirectorId == selectedDirectorId
      : true;
    return matchesSearch && matchesDirector;
  });

  return (
    <div className="container-fluid mt-4">
      <h2 className="text-center mb-4">Movies Management</h2>

      {/* Search box */}
      <div className="row mb-3">
        <div className="col-4 text-center mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {/* Directors sidebar */}
        <div className="col-md-2">
          <h3>Directors</h3>
          <ul className="list-unstyled">
            {directors.map((director) => (
              <li key={director.id} className="mb-1">
                <a
                  href="#"
                  className={`text-decoration-none ${
                    selectedDirectorId === director.id.toString()
                      ? "text-dark fw-bold"
                      : "text-primary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDirectorClick(director.id);
                  }}
                >
                  • {director.FullName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Movies table */}
        <div className="col-md-10">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <table className="table table-striped">
              <thead className="text-nowrap">
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
                    <td>{movie.Title}</td>
                    <td>{movie.ReleaseDate}</td>
                    <td>{movie.Description}</td>
                    <td>{movie.Language}</td>
                    <td>{movie.ProducerName}</td>
                    <td>{movie.StarNames}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePE;
