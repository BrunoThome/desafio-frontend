import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Error from '../Helper/Error';
import MovieCard from './MovieCard';

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  React.useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, [dispatch]);

  if (movies.loading) return <p>Carregando</p>;
  if (movies.error) return <Error error={movies.error} />;
  if (movies.data)
    return (
      <StyledMovieList>
        {movies.data.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </StyledMovieList>
    );
  else return null;
};

export default MovieList;
