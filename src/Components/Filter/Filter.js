import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Button from '../Helper/Forms/Button';
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
        <Button onClick={handleSearch}>Buscar</Button>
        <Button
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
        </Button>
      </StyledFilterButtonWrapper>
    </StyledFilter>
  );
};

export default Filter;
