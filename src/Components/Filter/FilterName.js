import React from 'react';
import { useDispatch } from 'react-redux';

const FilterName = () => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="Digite o nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button
        onClick={() => dispatch({ type: 'FETCH_MOVIES', payload: { name } })}
      >
        Buscar
      </button>
      <button onClick={() => dispatch({ type: 'FETCH_MOVIES' })}>Limpar</button>
    </>
  );
};

export default FilterName;
