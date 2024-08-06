import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Rating, IconButton, CircularProgress, Chip } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledCard = styled(Card)({
  borderRadius: '8px',
  backgroundColor: 'var(--material-theme-white, #FFF)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  maxWidth: '1002px',
  marginTop: '70px',
  margin: '0 auto', // Center the card
});

const CardTitleOverlay = styled(Box)({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'left',
});

const RatingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  backgroundColor: '#F5F5F5', // Very light grey background
  padding: '10px', // Add some padding for better spacing
  borderRadius: '8px', // Optional: Add border radius for rounded corners
});

const NavigationContainer = styled(Box)({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const StyledIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const NavText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)', // Slightly whiter font color
});

function MovieCard({ list }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
  };

  const currentMovie = list[currentIndex];

  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}
        <CardMedia
          component="img"
          height="350"
          image={currentMovie?.title?.primaryImage.imageUrl}
          alt="Movie poster"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          onLoad={() => setLoading(false)}
        />
        <NavigationContainer>
          <StyledIconButton onClick={handlePrev}>
            <ArrowBackIosNewIcon />
          </StyledIconButton>
          <NavText variant="body1">
            {`Movie ${currentIndex + 1} of ${list.length}`}
          </NavText>
          <StyledIconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </StyledIconButton>
        </NavigationContainer>
        <CardTitleOverlay>
          <Typography variant="h5" component="div" sx={{ color: 'white' }}>
            {currentMovie?.title?.originalTitleText.text}
          </Typography>
        </CardTitleOverlay>
      </Box>
      <CardContent>
        <Box display="flex" flexWrap="wrap" gap={1}>
          <Chip
            label={`Rating: ${currentMovie?.title?.ratingsSummary.aggregateRating}`}
            sx={{ backgroundColor: '#4B0082', color: 'white' }} // Indigo background for rating
          />
          <Chip
            label={`Release Year: ${currentMovie?.title?.releaseYear.year}`}
            sx={{ backgroundColor: '#2E8B57', color: 'white' }} // Sea green background for release year
          />
          <Chip
            label={`Vote Count: ${currentMovie?.title?.ratingsSummary.voteCount}`}
            sx={{ backgroundColor: '#8B0000', color: 'white' }} // Dark red background for vote count
          />
          {currentMovie?.title?.ratingsSummary.topRanking && (
            <Chip
              label={`Top Ranking: ${currentMovie?.title?.ratingsSummary.topRanking.rank}`}
              sx={{ backgroundColor: '#483D8B', color: 'white' }} // Dark slate blue background for top ranking
            />
          )}
        </Box>
      </CardContent>
      <RatingContainer>
        <Typography variant="body2" color="text.primary" gutterBottom>
          Rate this movie based on your interest
        </Typography>
        <Rating name="movie-rating" defaultValue={2.5} precision={0.5} />
      </RatingContainer>
    </StyledCard>
  );
}

export default MovieCard;