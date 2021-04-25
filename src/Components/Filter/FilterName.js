import React from 'react';
import styled from 'styled-components';

const StyledFilterInput = styled.input`
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
`;

const FilterName = ({ placeholder, value, setValue }) => {
  return (
    <StyledFilterInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

export default FilterName;
