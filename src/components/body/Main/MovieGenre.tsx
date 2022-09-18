import MovieGroup from './MovieGroup';
import UseFetch from '../../../lib/hooks/useFetch';
import { IMovieResults } from '../../../types/movie';

export interface IMovieGenreProps {
  id: string;
  name: string;
}

export default function MovieGenre({ id, name }: IMovieGenreProps) {
  const {
    isError,
    isLoading,
    data,
  }: { data: IMovieResults; isLoading: boolean; isError: boolean } = UseFetch({
    key: id,
    url: `/api/genres?id=${id}&page=1`,
    variable: name,
  });

  if (isError) <p>Error</p>;

  if (isLoading) <p>Loading...</p>;

  return <MovieGroup data={data?.results!} title={name} />;
}
