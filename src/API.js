const URL_API = 'http://192.168.15.13:5000';

export function GET_MOVIES() {
  return {
    url: `${URL_API}/movies`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_MOVIES_FILTER_BY_NAME(query) {
  return {
    url: `${URL_API}/movies?${query}`,
    options: {
      methos: 'GET',
    },
  };
}

export function POST_MOVIE(body) {
  return {
    url: `${URL_API}/movies`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
