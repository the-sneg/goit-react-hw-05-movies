const API_KEY = 'd181f6aed649ea703d889941a0afb502';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchTrendFilm() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function fetchFilmById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function fetchFilmByQuery(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function fetchCredits(id) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function fetchReviews(id) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}
