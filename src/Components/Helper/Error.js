import React from 'react';
import styled from 'styled-components';

const StyledError = styled.p`
  color: #f66;
  font-size: 0.875rem;
`;

const Error = ({ error }) => {
  return <StyledError>{error}</StyledError>;
};

export default Error;
