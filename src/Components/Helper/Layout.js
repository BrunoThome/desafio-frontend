import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 70rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
