import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/layout/Header';
import MovieCard from '../../components/MovieRating/MovieCard';
import Footer from '../../components/layout/Footer';
import MovieContext from '../../contexts/MovieContext';

function MovieRating() {
  const { movies } = React.useContext(MovieContext);

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MovieCard list={movies} />
      </Container>
      <Footer />
    </>
  );
}

export default MovieRating;