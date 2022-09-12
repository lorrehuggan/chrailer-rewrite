import { useMemo } from 'react';
import dataStore from '../../../lib/store/dataStore';
import { randomizeArray } from '../../../lib/utils';

export function Genres({}) {
  const { genres } = dataStore();

  const randomize = useMemo(() => {
    return randomizeArray(genres);
  }, [genres]);

  return (
    <div className="h-1/3 w-full space-y-8 p-10">
      <h3 className="">Popular Genres</h3>
      <div className="flex w-full flex-wrap gap-2">
        {randomize.map((genre) => (
          <a
            href={`/${genre.name}`}
            key={genre.id}
            className="color-trans rounded-lg bg-base-600 p-2 hover:bg-secondary"
          >
            <span className="font-bold">{genre.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
