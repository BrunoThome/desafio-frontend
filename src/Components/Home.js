import React from 'react';
import { Container } from './Helper/Layout';
import Filter from './Filter/Filter';
import MovieList from './Movies/MovieList';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GoSettings } from 'react-icons/go';

const StyledHome = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 4fr;
  }
  justify-content: center;
`;

const StyledMobileFilterWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: flex-end;
  position: relative;
  right: 0;
  z-index: 100;

  @media (min-width: 720px) {
    display: none;
  }
`;

const StyledFilterWrapper = styled.div`
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const StyledMobileFilterButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  display: grid;
  align-items: center;
  justify-content: center;

  &.active {
    background: #333;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const StyledMobileFilterMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 45px;
  padding: 0.5rem;
  background-color: #eee;
  box-shadow: 0px 0px 10px 0 #0006;
`;

const Home = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Container>
      <StyledHome>
        <StyledMobileFilterWrapper>
          <StyledMobileFilterButton
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className={mobileMenu ? 'active' : ''}
          >
            <GoSettings />
          </StyledMobileFilterButton>
          {mobileMenu && (
            <StyledMobileFilterMenu>
              <Filter />
            </StyledMobileFilterMenu>
          )}
        </StyledMobileFilterWrapper>

        <StyledFilterWrapper>
          <Filter />
        </StyledFilterWrapper>
        <MovieList />
      </StyledHome>
    </Container>
  );
};

export default Home;
