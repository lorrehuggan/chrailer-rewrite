import Link from 'next/link';
import * as React from 'react';
import { IMAGE_PATH } from '../../../lib/movie-API';
import { IMovie, IMoviePage } from '../../../types/movie';
import Filter from './Filter';

export interface ISmCardProps {
  movie: IMovie | IMoviePage;
}

export default function SmCard({ movie }: ISmCardProps) {
  return (
    <div
      key={movie.id}
      className="group cursor-grab active:cursor-grabbing flex flex-col  gap-2"
    >
      <Link href={`/movie/${movie.id}`} passHref>
        <div
          style={{
            backgroundImage: `url(${IMAGE_PATH + movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: '0% 35%',
          }}
          className="group relative aspect-[3/1.75] w-44 cursor-pointer overflow-hidden rounded-lg bg-base-900 p-8 opacity-100 shadow-lg brightness-110 transition-opacity duration-300 ease-in-out md:aspect-[3/1.75] md:w-96 md:opacity-80  md:hover:opacity-100"
        >
          <Filter />
          <div className="absolute top-0 left-0 flex w-full -translate-y-[100%] items-center justify-between gap-2 bg-black/60 py-4 px-2 transition-all duration-300 ease-in-out md:group-hover:translate-y-0">
            <p className="color-trans flex-1 truncate text-xl">
              {movie.title || movie.original_title}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="h-6 w-6 fill-green-500"
            >
              <title>Play</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className="flex w-44 gap-2 overflow-y-hidden">
        <p className="color-trans flex-1 truncate text-xl font-bold transition-all duration-300 ease-in-out md:group-hover:translate-y-[100%]">
          {movie.title || movie.original_title}
        </p>
      </div>
    </div>
  );
}
