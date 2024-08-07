import { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';
import {
  StyledCard,
} from './MovieCard.styles';
import MovieContext from '../../contexts/MovieContext';
import MovieCardMedia from './MovieCardMedia';
import MovieCardNavigation from './MovieCardNavigation';
import MovieCardTitleOverlay from './MovieCardTitleOverlay';
import MovieCardDetails from './MovieCardDetails';
import MovieCardRating from './MovieCardRating';
import MovieCardSnackbar from './MovieCardSnackbar';

function MovieCard({ list }) {
  const { ratings, updateRating } = useContext(MovieContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentRating, setCurrentRating] = useState(ratings?.[list[currentIndex]?.title?.id] || null);
  const [navigateNext, setNavigateNext] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    setCurrentRating(ratings?.[list[currentIndex]?.title?.id] || null);
  }, [currentIndex, ratings, list]);

  useEffect(() => {
    if (navigateNext) {
      handleNext();
      setNavigateNext(false);
    }
  }, [navigateNext]);

  const handleNext = () => {
    if (currentRating === null) {
      setSnackbarMessage('Please rate the movie before moving to the next one!');
      setSnackbarOpen(true);
      return;
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (!prevIndex) {
        setSnackbarMessage('Not allowed!');
        setSnackbarOpen(true);
        return prevIndex;
      } else {
        return (prevIndex - 1 + list.length) % list.length;
      }
    });
  };

  const handleRatingChange = (event, newValue) => {
    setCurrentRating(newValue);
    updateRating(list[currentIndex].title.id, newValue);
    setNavigateNext(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const currentMovie = list[currentIndex];

  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        <MovieCardMedia loading={loading} setLoading={setLoading} imageUrl={currentMovie?.title?.primaryImage?.imageUrl}/>
        <MovieCardNavigation handleNext={handleNext} handlePrev={handlePrev} currentIndex={currentIndex} listLength={list?.length}/>
        <MovieCardTitleOverlay title={currentMovie?.title?.originalTitleText?.text} />
      </Box>
      <MovieCardDetails movie={currentMovie} />
      <MovieCardRating currentRating={currentRating} handleRatingChange={handleRatingChange} />
      <MovieCardSnackbar snackbarOpen={snackbarOpen} handleCloseSnackbar={handleCloseSnackbar} snackbarMessage={snackbarMessage} />
    </StyledCard>
  );
}

export default MovieCard;