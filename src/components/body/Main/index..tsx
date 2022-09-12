import { useMemo } from 'react';
import dataStore from '../../../lib/store/dataStore';
import { randomizeArray } from '../../../lib/utils';
import { MainCard } from '../Cards/MainCard';
import MovieGenre from './MovieGenre';
import MovieGroup from './MovieGroup';

export function Main() {
  const { popular, upcoming, top_rated, trending, genres } = dataStore();

  const randomizeGenres = useMemo(() => {
    return randomizeArray(genres);
  }, [genres]);

  return (
    <div className="min-h-[calc(100vh-12.5rem)] w-full flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex h-28 items-center justify-between px-10">
        <div>
          <h3>Now Featuring</h3>
        </div>
        <div className="flex items-center gap-1">
          <input
            placeholder="Search"
            type="text"
            className="border-b-[1px] border-white bg-transparent outline-none"
          />
        </div>
      </div>
      <div className=" max-w-full space-y-10 px-10">
        <MainCard />
        <div className="scrollbar-hide h-[calc(100vh-45rem)] space-y-5 overflow-scroll pb-12">
          <MovieGroup data={popular} title="Popular" />
          <MovieGroup data={top_rated} title="Top Rated" />
          <MovieGroup data={upcoming} title="Upcoming" />
          <MovieGroup data={trending} title="Trending" />
          {randomizeGenres.map((genre) => (
            <MovieGenre
              key={genre.id}
              id={String(genre.id)}
              name={genre.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
