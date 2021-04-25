import React from 'react';
import styled from 'styled-components';

const StyledFilterIntervalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;
const StyledFilterIntervalField = styled.div``;

const FilterInterval = ({
  label,
  startLabel,
  startType,
  startName,
  startValue,
  startSetValue,
  endLabel,
  endType,
  endName,
  endValue,
  endSetValue,
}) => {
  return (
    <>
      <h4>{label}</h4>
      <StyledFilterIntervalWrapper>
        <StyledFilterIntervalField>
          <label htmlFor={startName}>{startLabel}</label>
          <input
            type={startType}
            id={startName}
            name={startName}
            value={startValue}
            onChange={({ target }) => startSetValue(target.value)}
          />
        </StyledFilterIntervalField>
        <StyledFilterIntervalField>
          <label htmlFor={endName}>{endLabel}</label>
          <input
            type={endType}
            id={endName}
            name={endName}
            value={endValue}
            onChange={({ target }) => endSetValue(target.value)}
          />
        </StyledFilterIntervalField>
      </StyledFilterIntervalWrapper>
    </>
  );
};

export default FilterInterval;
