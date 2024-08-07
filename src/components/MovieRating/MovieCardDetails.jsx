import { Box, Chip, CardContent } from '@mui/material';

function MovieCardDetails({ movie }) {
  return (
    <CardContent>
      <Box display="flex" flexWrap="wrap" gap={1}>
        <Chip
          label={`Rating: ${movie?.title?.ratingsSummary?.aggregateRating}`}
          sx={{ backgroundColor: '#4B0082', color: 'white' }}
        />
        <Chip
          label={`Release Year: ${movie?.title?.releaseYear?.year}`}
          sx={{ backgroundColor: '#2E8B57', color: 'white' }}
        />
        <Chip
          label={`Vote Count: ${movie?.title?.ratingsSummary?.voteCount}`}
          sx={{ backgroundColor: '#8B0000', color: 'white' }}
        />
        {movie?.title?.ratingsSummary?.topRanking && (
          <Chip
            label={`Top Ranking: ${movie?.title?.ratingsSummary?.topRanking?.rank}`}
            sx={{ backgroundColor: '#483D8B', color: 'white' }}
          />
        )}
      </Box>
    </CardContent>
  );
}

export default MovieCardDetails;