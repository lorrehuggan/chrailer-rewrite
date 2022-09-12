import { IMovie } from '../../../types/movie';
import SmCard from '../Cards/SmCard';

export interface IMovieGroupProps {
  data: IMovie[];
  title: string;
}

export default function MovieGroup({ data, title }: IMovieGroupProps) {
  return (
    <>
      <h3 className="">{title}</h3>
      <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-scroll scroll-smooth">
        {data?.map((movie) => (
          <SmCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
