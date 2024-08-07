import { RatingContainer } from './MovieCard.styles';
import { Typography, Rating } from '@mui/material';

function MovieCardRating({ currentRating, handleRatingChange }) {
  return (
    <RatingContainer>
      <Typography variant="body2" color="text.primary" gutterBottom>
        Rate this movie based on your interest
      </Typography>
      <Rating
        name="movie-rating"
        value={currentRating}
        onChange={handleRatingChange}
        precision={0.5}
      />
    </RatingContainer>
  );
}

export default MovieCardRating;