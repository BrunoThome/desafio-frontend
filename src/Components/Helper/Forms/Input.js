import React from 'react';
import styled from 'styled-components';
import Error from '../Error';

const StyledInputWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  border: 1px solid #333;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #fff8;
  transition: 0.2s;
`;

function Input({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  setValue,
  validate,
  ...props
}) {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <Error error={error} />}
    </StyledInputWrapper>
  );
}

export default Input;
