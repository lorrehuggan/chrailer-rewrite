import React, { useMemo, useRef } from 'react';
import dataStore from '../../../lib/store/dataStore';
import { randomizeArray } from '../../../lib/utils';
import MovieGenre from './MovieGenre';
import MovieGroup from './MovieGroup';

export function Genres({}) {
  const { popular, upcoming, top_rated, trending, genres } = dataStore();

  const randomizeGenres = useMemo(() => {
    return randomizeArray(genres);
  }, [genres]);

  return (
    <div className="scrollbar-hide flex-1 space-y-5 overflow-scroll pb-12">
      <MovieGroup data={popular} title="Popular" />
      <MovieGroup data={top_rated} title="Top Rated" />
      <MovieGroup data={upcoming} title="Upcoming" />
      <MovieGroup data={trending} title="Trending" />
      {randomizeGenres.map((genre) => (
        <MovieGenre key={genre.id} id={String(genre.id)} name={genre.name} />
      ))}
    </div>
  );
}
