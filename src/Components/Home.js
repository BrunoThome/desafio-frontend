import React from 'react';
import { Container } from './Helper/Layout';
import Filter from './Filter/Filter';
import MovieList from './Movies/MovieList';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/core/slices/filters';

const StyledHome = styled.section`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 4fr;
  }
  justify-content: center;
`;

const Home = () => {
  console.log(useLocation());
  const search = useLocation().search;
  const params = React.useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setName(params.get('name_like') || ''));
  }, [params, dispatch]);

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
