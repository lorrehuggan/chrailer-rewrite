import dataStore from '../../../lib/store/dataStore';
import { MdCard } from '../Cards/MdCard';

export function NewTrailers({}) {
  const { trending } = dataStore();

  return (
    <div className="flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex h-28 items-center justify-between px-10">
        <h3 className="">Trending</h3>
        <div className="flex items-center">
          <span className="mr-1 text-base-300">Scroll for more</span>
        </div>
      </div>
      <div className="scrollbar-hide h-[calc(18rem*2+7rem)] snap-y overflow-scroll px-10">
        <div className="space-y-8">
          {trending.slice(0, 6).map((trend, i) => (
            <MdCard key={trend.id} movie={trend} />
          ))}
        </div>
      </div>
    </div>
  );
}
