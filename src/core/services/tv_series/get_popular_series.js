import { tmdbApi } from '../datasources/remote/tmdb_api';

export const getPopularMovies = async () => {
  const { data } = await tmdbApi.get('/tv/popular');
  return data;
};