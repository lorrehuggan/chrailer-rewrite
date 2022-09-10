import React from 'react';
import { SmMovieCard } from './SmMovieCard';
import { IMovie } from '../../types/movie';

interface Props {
  trending: IMovie[];
}

export function NewTrailers({ trending }: Props) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex justify-between p-10">
        <h3 className="">New trailers</h3>
        <div className="flex items-center">
          <span className="mr-1 text-base-300">Sort By:</span>
          <span>Rating</span>
        </div>
      </div>
      <div className="h-[calc(18rem*2+2rem)] snap-y overflow-scroll px-10">
        <div className="space-y-8">
          {trending.slice(0, 6).map((trend, i) => (
            <SmMovieCard
              key={trend.id}
              image={trend.backdrop_path}
              title={trend.title || trend.original_title || trend.name}
              date={trend.release_date || trend.first_air_date}
              rating={trend.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
