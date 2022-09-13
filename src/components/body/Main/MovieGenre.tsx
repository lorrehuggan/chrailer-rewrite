import { useQuery } from '@tanstack/react-query';
import { FETCH_CATEGORIES } from '../../../lib/movie-API';
import MovieGroup from './MovieGroup';
import { IMovie, IMovieResults } from '../../../types/movie';
import UseFetch from '../../../lib/hooks/useFetch';

export interface IMovieGenreProps {
  id: string;
  name: string;
}

// const fetcher = async (id: string, number: string) => {
//   try {
//     const res = await fetch(`/api/genres?id=${id}&page=${number}`);
//     const json = await res.json();
//     return json;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

export default function MovieGenre({ id, name }: IMovieGenreProps) {
  // const { data, isError, isLoading } = useQuery<IMovieResults>([name, id], () =>
  //   fetcher(id, '1')
  // );

  const { isError, isLoading, data } = UseFetch({
    key: id,
    url: `/api/genres?id=${id}&page=1`,
    variable: '',
  });

  if (isError) {
    <p>Error</p>;
  }

  // TODO loading state

  return <MovieGroup data={data?.results!} title={name} />;
}
