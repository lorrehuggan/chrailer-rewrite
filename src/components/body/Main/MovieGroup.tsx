import { useEffect, useRef, useState } from 'react';
import { IMovie } from '../../../types/movie';
import SmCard from '../Cards/SmCard';
import useIntersectionObserver from '@react-hook/intersection-observer';

export interface IMovieGroupProps {
  data: IMovie[];
  title: string;
}

export default function MovieGroup({ data, title }: IMovieGroupProps) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const { isIntersecting } = useIntersectionObserver(ref);

  return (
    <div
      ref={setRef}
      className={`${
        isIntersecting
          ? 'translate-y-0 opacity-100'
          : 'translate-y-12 opacity-0'
      } transition-all duration-700 ease-in-out`}
    >
      <h3 className="mb-4">{title}</h3>
      <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-scroll scroll-smooth">
        {data?.map((movie) => (
          <SmCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
