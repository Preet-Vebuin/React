import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setPage } from "../store/movieSlice";
import MovieCard from "./MovieCard";
import { Container, Grid, Button, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../store/movieStore"; // ✅ Import AppDispatch

const MoviesList: React.FC = () => {
    
    
    const dispatch = useDispatch<AppDispatch>(); // ✅ Correctly typed dispatch
    const { movies = [], isLoading, error, page } = useSelector((state: RootState) => state.movies);
  
  // Fetch movies when page changes
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const shouldCrash = false; // Set this to true for testing
  if (shouldCrash) {
    throw new Error("Failed to load movies!"); // Simulated error
  }

  return (
    <Container>
      <Typography variant="h4" textAlign="center" gutterBottom>
        🎬 Movie List
      </Typography>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1} variant="contained">
          Previous
        </Button>
        <Button onClick={() => dispatch(setPage(page + 1))} variant="contained" sx={{ ml: 2 }}>
          Next
        </Button>
      </div>

      {isLoading && <Typography textAlign="center">Loading...</Typography>}
      {error && <Typography textAlign="center" color="error">{error}</Typography>}

      <Grid container spacing={3} justifyContent="center">
        {movies.map((movie: any) => (
          <Grid item key={movie.movie_id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoviesList;
