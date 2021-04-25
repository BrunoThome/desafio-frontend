import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../Helper/Error';
import Pagination from '../Pagination/Pagination';
import MovieCard from './MovieCard';

const StyledMovieListWrapper = styled.div``;

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, filters } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, [dispatch, filters]);

  if (movies.loading) return <p>Carregando</p>;
  if (movies.error) return <Error error={movies.error} />;
  if (movies.data) {
    if (movies.data.total > 0) {
      return (
        <StyledMovieListWrapper>
          <StyledMovieList>
            {movies.data.movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </StyledMovieList>
          <Pagination />
        </StyledMovieListWrapper>
      );
    } else {
      return <p>Não foi encontrado nenhum filme.</p>;
    }
  } else return null;
};

export default MovieList;
