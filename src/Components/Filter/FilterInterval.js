import React from 'react';
import styled from 'styled-components';

const StyledFilterIntervalWrapper = styled.div`
  display: grid;
  padding: 0.5rem 0;
`;

const StyledFilterIntervalTitle = styled.h4``;

const StyledFilterIntervalFields = styled.div``;

const StyledFilterIntervalField = styled.div`
  display: grid;
`;

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
    <StyledFilterIntervalWrapper>
      <StyledFilterIntervalTitle>{label}</StyledFilterIntervalTitle>
      <StyledFilterIntervalFields>
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
      </StyledFilterIntervalFields>
    </StyledFilterIntervalWrapper>
  );
};

export default FilterInterval;
