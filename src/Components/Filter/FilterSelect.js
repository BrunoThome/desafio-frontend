import React from 'react';
import styled from 'styled-components';

const StyledOptionWrapper = styled.ul``;
const StyledOption = styled.li`
  display: flex;
`;

const FilterSelect = ({ label, name, options, value, setValue }) => {
  function handleChange({ target }) {
    const tempValue = value ? value.split(',') : [];
    if (target.checked) {
      if (tempValue) {
        if (!tempValue.includes(target.value)) {
          setValue([...tempValue, target.value].toString());
        }
      } else setValue([target.value]);
    } else {
      const newValue = [...tempValue];
      newValue.splice(newValue.indexOf(target.value), 1);
      setValue([...newValue].toString());
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
                checked={value && value.includes(option)}
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
