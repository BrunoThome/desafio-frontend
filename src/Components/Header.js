import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Container } from './Helper/Layout';

const StyledHeader = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fb1;
  top: 0;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const StyledLogo = styled.h1`
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  font-family: 'Antonio', sans-serif;
  color: #333;
  box-shadow: 3px 3px 5px 0px #0003;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  a {
    color: #333;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;

    &::after {
      content: '';
      display: block;
      margin-right: 2px;
      width: 0%;
      height: 3px;
      background-color: #fb1;
      transition: 0.4s;
    }
    &:hover::after,
    &.active::after {
      background-color: #333;
      width: 100%;
    }
  }
`;

const StyledDivider = styled.div`
  content: '';
  display: block;
  height: 40px;
  width: 2px;
  margin: 0 10px;
  background-color: #0002;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLogo>
            <Link to="/">MyMovies</Link>
          </StyledLogo>
          <StyledLinks>
            <NavLink to="/" activeClassName="active" end>
              meus filmes
            </NavLink>
            <StyledDivider />
            <NavLink to="/register" activeClassName="active">
              cadastrar
            </NavLink>
          </StyledLinks>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
