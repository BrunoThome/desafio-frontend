import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { setFilter } from '../../redux/core/slices/filters';
import FilterName from './FilterName';
import FilterSelect from './FilterSelect';

const StyledFilter = styled.div`
  max-width: 10rem;
  display: none;

  @media (min-width: 720px) {
    display: block;
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

  function handleSearch() {
    dispatch(
      setFilter({
        name_like: name,
        genre,
        rate,
      }),
    );
    dispatch({ type: 'FETCH_MOVIES' });
  }

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

      <button onClick={handleSearch}>Buscar</button>
      <button onClick={() => {}}>Limpar</button>
    </StyledFilter>
  );
};

export default Filter;
