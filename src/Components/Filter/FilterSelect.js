import React from 'react';
import styled from 'styled-components';

const StyledOptionWrapper = styled.ul``;
const StyledOption = styled.li`
  display: flex;
`;

const FilterSelect = ({ label, name, options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      if (!value.includes(target.value)) {
        setValue([...value, target.value]);
      }
    } else {
      value.splice(value.indexOf(target.value), 1);
      setValue([...value]);
    }
  }

  return (
    <div>
      {label}
      <StyledOptionWrapper>
        {options.map((option) => {
          return (
            <StyledOption key={option}>
              <input
                type="checkbox"
                id={option}
                name={name}
                value={option}
                onChange={handleChange}
                checked={value.includes(option)}
              />
              <label htmlFor={option}> {option} </label>
            </StyledOption>
          );
        })}
      </StyledOptionWrapper>
    </div>
  );
};

export default FilterSelect;
