import React from 'react';
import styled from 'styled-components';
import Error from '../Error';

const StyledSelectWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledLabel = styled.label``;

const StyledSelect = styled.select`
  border: 1px solid #333;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #fff8;
  transition: 0.2s;
`;

const Select = ({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  setValue,
  validate,
  ...props
}) => {
  return (
    <StyledSelectWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
      {error && <Error error={error} />}
    </StyledSelectWrapper>
  );
};

export default Select;
