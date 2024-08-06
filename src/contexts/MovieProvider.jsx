import React, { useState, useEffect } from 'react';
import MovieContext from './MovieContext';
import axiosInstance from '../api/axios-instance';

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    } else {
      const fetchMovies = async () => {
        try {
          const response = await axiosInstance.post('/getPopularMovies', {
            limit: 10,
            releaseDate: {
              releaseDateRange: {
                end: '2029-12-31',
                start: '2000-01-01'
              }
            },
            userRatings: {
              aggregateRatingRange: { max: 10, min: 6 },
              ratingsCountRange: { min: 1000 }
            },
            genre: {
              allGenreIds: []
            },
            runtime: {
              runtimeRangeMinutes: { max: 220, min: 0 }
            }
          });
          const movieList = response.data?.data?.list || [];
          setMovies(movieList);
          localStorage.setItem('movies', JSON.stringify(movieList));
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };

      fetchMovies();
    }
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;