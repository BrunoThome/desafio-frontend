import React from 'react';
import styled from 'styled-components';
import MovieCardStars from './MovieCardStars';

const StyledMovieCard = styled.div`
  box-shadow: 2px 2px 5px 0 #0003;
  padding: 0.5rem;
  background: #fff;
`;

const StyledMovieCardImage = styled.img`
  max-height: 250px;
  margin: 0 auto;
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
      <StyledMovieCardImage
        src={
          movie.imageURL ||
          `https://via.placeholder.com/300x500.png?text=${movie.name}`
        }
        alt=""
      />
      <StyledMovieCardInfo>
        <StyledMovieCardInfoTitle>{movie.name}</StyledMovieCardInfoTitle>
        <StyledMovieCardInfoDetails>
          Lançado em: <b>{movie.releaseDate}</b>
        </StyledMovieCardInfoDetails>
        <StyledMovieCardInfoDetails>
          Genero: <b>{movie.genre}</b>
        </StyledMovieCardInfoDetails>
        <StyledMovieCardInfoDetails>
          Avaliação: <MovieCardStars stars={movie.rate} />
        </StyledMovieCardInfoDetails>
      </StyledMovieCardInfo>
    </StyledMovieCard>
  );
};

export default MovieCard;
