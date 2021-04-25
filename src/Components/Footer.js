import React from 'react';
import styled from 'styled-components';
import { Container } from '../Components/Helper/Layout';

const StyledFooter = styled.footer`
  height: 2rem;
  background-color: #fb1;
  margin-top: 1rem;
  color: #0036;
  padding: 0.5rem;
  text-align: right;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>MyMovies. Alguns direitos reservados.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
