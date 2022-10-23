import { useEffect, useRef, useState } from 'react';
import { IMovie, IMoviePage } from '../../../types/movie';
import SmCard from '../Cards/SmCard';
import { motion } from 'framer-motion';
import { setTimeout } from 'timers/promises';
export interface IMovieGroupProps {
  data: IMovie[] | IMoviePage[];
  title?: string;
}

export default function MovieGroup({ data, title }: IMovieGroupProps) {
  const [width, setWidth] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [width]);

  return (
    <motion.div
      ref={carouselRef}
      className="relative transition-all duration-700 ease-in-out bg-red overflow-hidden"
    >
      <h3 className="mb-4 text-lg md:text-xl">{title}</h3>
      <motion.div
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className=" relative flex flex-nowrap gap-2  scroll-smooth scrollbar-none md:gap-4 md:pb-6"
      >
        {data?.map((movie) => (
          <SmCard key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </motion.div>
  );
}
