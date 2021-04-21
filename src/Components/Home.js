import React from 'react';
import { Container } from './Helper/Layout';
import Filter from './Filter/Filter';
import MovieList from './Movies/MovieList';
import styled from 'styled-components';

const StyledHome = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 2rem;

  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <StyledHome>
        <Filter />
        <MovieList />
      </StyledHome>
    </Container>
  );
};

export default Home;
