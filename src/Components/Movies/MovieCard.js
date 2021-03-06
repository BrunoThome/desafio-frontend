import React from 'react';
import styled from 'styled-components';
import MovieCardStars from './MovieCardStars';
import MovieImage from './MovieImage';
import MovieRemove from './MovieRemove';

const StyledMovieCard = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 2px 2px 5px 0 #0003;
  padding: 0.5rem;
  background: #fff;

  @media (min-width: 720px) {
    grid-template-rows: 2fr auto;
  }
`;

const StyledMovieCardInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const StyledMovieCardInfo = styled.div``;

const StyledMovieCardInfoTitle = styled.h3`
  text-align: center;
  color: #333;
  font-family: 'Roboto', sans-serif;
  &::after,
  &::before {
    content: '';
    display: block;
    height: 1px;
    margin: 5px 0;
    width: 100%;
    background-color: #0003;
  }
`;

const StyledMovieCardInfoDetails = styled.span`
  display: block;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  width: 100%;
  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 2px;
    margin-right: 2px;
    background-color: #0003;
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <StyledMovieCard>
      <MovieImage alt={movie.name} src={movie.imageURL || ''} />
      <StyledMovieCardInfoTitle>{movie.name}</StyledMovieCardInfoTitle>
      <StyledMovieCardInfoWrapper>
        <StyledMovieCardInfo>
          <StyledMovieCardInfoDetails>
            Lançado em: <b>{movie.releaseYear}</b>
          </StyledMovieCardInfoDetails>
          <StyledMovieCardInfoDetails>
            Genero: <b>{movie.genre}</b>
          </StyledMovieCardInfoDetails>
          <StyledMovieCardInfoDetails>
            Avaliação: <MovieCardStars stars={movie.rate} />
          </StyledMovieCardInfoDetails>
        </StyledMovieCardInfo>
        <MovieRemove id={movie.id} />
      </StyledMovieCardInfoWrapper>
    </StyledMovieCard>
  );
};

export default MovieCard;
