import { Genres } from './Genres';
import { MainCard } from '../Cards/MainCard';
import dataStore from '../../../lib/store/dataStore';
import Genre from '../../../../pages/genre/[id]';

export function Main() {
  const { trending } = dataStore();
  return (
    <div className="w-full flex-1 overflow-hidden">
      <div className="flex h-[calc(100vh-6.25rem)] flex-col gap-6 px-10 md:h-[calc(100vh-11.25rem)] md:gap-10">
        <MainCard data={trending} />
        <Genres />
        <div className="flex items-center justify-between py-2">
          <small className="text-xs ">Project by Lorre Huggan</small>
          <small className="text-xs">Powerd By TMDB</small>
        </div>
      </div>
    </div>
  );
}
