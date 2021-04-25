import React from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import useFetch from '../../Hooks/useFetch';
import { DELETE_MOVIE } from '../../API';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/saga/actions';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const StyledMovieRemove = styled.div`
  display: grid;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledMovieRemoveButton = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  & svg {
    width: 50%;
    height: 50%;
  }
`;

const MovieRemove = ({ id }) => {
  const { loading, error, request } = useFetch();
  const dispatch = useDispatch();
  async function handleRemove() {
    const confirm = window.confirm('Tem certeza que deseja remover?');
    if (confirm) {
      const { url, options } = DELETE_MOVIE(id);
      const result = await request(url, options);
      if (result.response.status === 200) {
        dispatch(fetchMovies());
      }
    }
  }

  return (
    <StyledMovieRemove>
      {error && <Error error={error} />}
      {loading ? (
        <Loading />
      ) : (
        <StyledMovieRemoveButton onClick={handleRemove}>
          <BsTrash />
        </StyledMovieRemoveButton>
      )}
    </StyledMovieRemove>
  );
};

export default MovieRemove;
