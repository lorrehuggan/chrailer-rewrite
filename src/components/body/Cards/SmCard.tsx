import * as React from 'react';
import { IMAGE_PATH } from '../../../lib/movie-API';
import { IMovie } from '../../../types/movie';
import Filter from './Filter';

export interface ISmCardProps {
  movie: IMovie;
}

export default function SmCard({ movie }: ISmCardProps) {
  return (
    <div key={movie.id} className="flex flex-col gap-2">
      <div
        style={{
          backgroundImage: `url(${IMAGE_PATH + movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: '0% 35%',
        }}
        className="group relative h-44 w-96 cursor-pointer overflow-hidden rounded-lg bg-base-900 p-8 opacity-80 shadow-lg transition-opacity duration-300 ease-in-out hover:opacity-100"
      >
        <Filter />
      </div>
      <div className="">
        <span className="truncate text-ellipsis text-lg text-base-200 ">
          {movie.title || movie.original_title || movie.name}
        </span>
      </div>
    </div>
  );
}
