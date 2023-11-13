import { tmdbApi } from '../datasources/remote/tmdb_api';

export const getTopRatedMovies = async () => {
  const { data } = await tmdbApi.get('/genre/tv');
  return data;
};
