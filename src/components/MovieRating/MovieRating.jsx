import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MovieCard from './MovieCard';

function MovieRating() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MovieCard />
      </Container>
      <Footer />
    </>
  );
}

export default MovieRating;