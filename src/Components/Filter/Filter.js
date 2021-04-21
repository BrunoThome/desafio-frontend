import React from 'react';
import styled from 'styled-components';
import FilterName from './FilterName';

const StyledFilter = styled.div`
  max-width: 10rem;
  display: none;
  @media (min-width: 840px) {
    display: block;
  }
`;

const Filter = () => {
  return (
    <StyledFilter>
      <FilterName />
    </StyledFilter>
  );
};

export default Filter;
