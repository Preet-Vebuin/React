import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface MovieProps {
  movie: {
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="400"
        image={movie.poster_path}
        alt={movie.original_title}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {movie.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}
        </Typography>
        <Box mt={1}>
          <Typography variant="caption">📅 {movie.release_date}</Typography>
          <Typography variant="caption" sx={{ float: "right" }}>
            ⭐ {movie.vote_average}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
