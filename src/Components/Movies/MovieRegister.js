import React from 'react';
import { POST_MOVIE } from '../../API';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Input from '../Helper/Forms/Input';
import Select from '../Helper/Forms/Select';
import { Container } from '../Helper/Layout';

const MovieRegister = () => {
  const name = useForm();
  const releaseDate = useForm('number');
  const genre = useForm();
  const rate = useForm('number');
  const genres = ['Ação', 'Suspense', 'Comédia', 'Romântico'];
  const { loading, data, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const newMovie = {
      name: name.value,
      releaseDate: releaseDate.value,
      genre: genre.value,
      rate: rate.value,
    };
    name.validate();
    releaseDate.validate();
    genre.validate();
    rate.validate();
    if (
      name.validate() &&
      releaseDate.validate() &&
      genre.validate() &&
      rate.validate()
    ) {
      const { url, options } = POST_MOVIE(newMovie);
      await request(url, options);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Nome" {...name} />
        <Input
          type="number"
          name="name"
          label="Ano de lançamento"
          min="0"
          {...releaseDate}
        />
        <Select name="name" label="Nome" options={genres} {...genre} />
        <Input
          type="number"
          name="name"
          label="Nota"
          min="0"
          max="5"
          {...rate}
        />
        {loading ? (
          <button disabled>Cadastrando...</button>
        ) : (
          <button>Cadastrar</button>
        )}
        {error && <p>{error}</p>}
      </form>
    </Container>
  );
};

export default MovieRegister;
