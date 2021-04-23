export function initFilter() {
  const params = new URLSearchParams(window.location.search);
  console.log(params.toString());
  return {
    name_like: params.get('name_like') || '',
    genre: params.getAll('genre'),
    rate: params.getAll('rate'),
    releaseDate: params.getAll('releaseDate'),
  };
}
