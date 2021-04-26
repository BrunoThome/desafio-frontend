import React from 'react';
import styled from 'styled-components';
import { POST_MOVIE } from '../../API';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Helper/Forms/Button';
import Input from '../Helper/Forms/Input';
import Select from '../Helper/Forms/Select';
import { Container } from '../Helper/Layout';
import { useNavigate } from 'react-router-dom';

const StyledRegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledForm = styled.form`
  margin-top: 0.5rem;
`;

const MovieRegister = () => {
  const name = useForm();
  const releaseYear = useForm('number');
  const genre = useForm();
  const imageURL = useForm(false);
  const rate = useForm('number');
  const genres = ['Ação', 'Suspense', 'Comédia', 'Romântico'];
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const newMovie = {
      name: name.value,
      releaseYear: releaseYear.value,
      genre: genre.value,
      rate: rate.value,
      imageURL: imageURL.value,
    };
    name.validate();
    releaseYear.validate();
    genre.validate();
    rate.validate();
    if (
      name.validate() &&
      releaseYear.validate() &&
      genre.validate() &&
      rate.validate()
    ) {
      const { url, options } = POST_MOVIE(newMovie);
      const response = await request(url, options);
      if (response.response.status === 201) {
        navigate('/', { replace: true });
      }
    }
  }

  return (
    <Container>
      <StyledRegisterWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Input type="text" name="name" label="Nome *" {...name} />
          <Input
            type="number"
            name="name"
            label="Ano de lançamento *"
            min="0"
            {...releaseYear}
          />
          <Select name="name" label="Gênero" options={genres} {...genre} />
          <Input
            type="number"
            name="name"
            label="Nota *"
            min="0"
            max="5"
            {...rate}
          />
          <Input
            type="text"
            name="imageURL"
            label="URL da imagem"
            {...imageURL}
          />
          {loading ? (
            <Button disabled> Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          {error && <p>{error}</p>}
        </StyledForm>
      </StyledRegisterWrapper>
    </Container>
  );
};

export default MovieRegister;
