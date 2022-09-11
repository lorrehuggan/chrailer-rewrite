import { SmMovieCard } from './SmMovieCard';
import dataStore from '../../../lib/store/dataStore';

export function NewTrailers({}) {
  const { trending } = dataStore();

  return (
    <div className="flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex h-28 items-center justify-between px-10">
        <h3 className="">Trending</h3>
        <div className="flex items-center">
          <span className="mr-1 text-base-300">Sort By:</span>
          <span>Rating</span>
        </div>
      </div>
      <div className="h-[calc(18rem*2+4rem)] snap-y overflow-scroll px-10">
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
