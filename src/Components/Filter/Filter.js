import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  setName as setNameAction,
  setGenre as setGenreAction,
  setRate as setRateAction,
  resetFilter,
  setStartReleaseYear,
  setEndReleaseYear,
  setPage,
} from '../../redux/core/slices/filters';
import FilterInterval from './FilterInterval';
import FilterName from './FilterName';
import FilterSelect from './FilterSelect';

const StyledFilter = styled.div``;

const StyledFilterButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledFilterButton = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;

const Filter = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const genreOptions = ['Ação', 'Comédia', 'Suspense'];
  const rateOptions = ['1', '2', '3', '4', '5'];
  const [name, setName] = React.useState(filters.name_like);
  const [genre, setGenre] = React.useState(filters.genre);
  const [rate, setRate] = React.useState(filters.rate);
  const [startYear, setStartYear] = React.useState(filters.releaseYear_gte);
  const [endYear, setEndYear] = React.useState(filters.releaseYear_lte);

  function resetState() {
    setName(filters.name_like);
    setGenre(filters.genre);
    setRate(filters.rate);
    setStartYear(filters.releaseYear_gte);
    setEndYear(filters.releaseYear_lte);
  }

  function handleSearch() {
    dispatch(setNameAction(name));
    dispatch(setGenreAction(genre));
    dispatch(setRateAction(rate));
    dispatch(setStartReleaseYear(startYear));
    dispatch(setEndReleaseYear(endYear));
    dispatch(setPage(1));
    dispatch({ type: 'FETCH_MOVIES' });
  }

  React.useEffect(() => {
    setName(filters.name_like);
    setGenre(filters.genre);
    setRate(filters.rate);
    setStartYear(filters.releaseYear_gte);
    setEndYear(filters.releaseYear_lte);
  }, [filters]);

  return (
    <StyledFilter>
      <FilterName
        placeholder="Digite o nome para buscar"
        value={name}
        setValue={setName}
      />
      <FilterSelect
        label="Gênero"
        name="genre"
        options={genreOptions}
        value={genre}
        setValue={setGenre}
      />
      <FilterSelect
        label="Avaliação"
        name="rate"
        options={rateOptions}
        value={rate}
        setValue={setRate}
      />
      <FilterInterval
        label="Ano de Lançamento"
        startLabel="De"
        startType="number"
        startName="startYear"
        startValue={startYear}
        startSetValue={setStartYear}
        endLabel="Até"
        endType="number"
        endName="endYear"
        endValue={endYear}
        endSetValue={setEndYear}
      />
      <StyledFilterButtonWrapper>
        <StyledFilterButton onClick={handleSearch}>Buscar</StyledFilterButton>
        <StyledFilterButton
          onClick={() => {
            dispatch(resetFilter());

            setName(filters.name_like);
            setGenre(filters.genre);
            setRate(filters.rate);
            setStartYear(filters.releaseYear_gte);
            setEndYear(filters.releaseYear_lte);
          }}
        >
          Limpar
        </StyledFilterButton>
      </StyledFilterButtonWrapper>
    </StyledFilter>
  );
};

export default Filter;
