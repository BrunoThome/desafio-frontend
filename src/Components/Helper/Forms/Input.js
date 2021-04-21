import React from 'react';
import styled from 'styled-components';
import Error from '../Error';

const StyledInputWrapper = styled.div``;

const StyledLabel = styled.label``;

const StyledInput = styled.input``;

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
