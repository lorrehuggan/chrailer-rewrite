import { useEffect, useRef, useState } from 'react';
import { IMovie, IMoviePage } from '../../../types/movie';
import SmCard from '../Cards/SmCard';
import useIntersectionObserver from '@react-hook/intersection-observer';

export interface IMovieGroupProps {
  data: IMovie[] | IMoviePage[];
  title?: string;
}

export default function MovieGroup({ data, title }: IMovieGroupProps) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <div
      ref={setRef}
      className={` relative transition-all duration-700 ease-in-out`}
    >
      <h3 className="mb-4">{title}</h3>
      <div
        className=" relative flex flex-nowrap gap-2 overflow-scroll scroll-smooth scrollbar md:gap-4
       md:pb-6 md:scrollbar-none"
      >
        {data?.map((movie) => (
          <SmCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
