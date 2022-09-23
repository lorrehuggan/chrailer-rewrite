import { Genres } from './Genres';
import { MainCard } from '../Cards/MainCard';
import dataStore from '../../../lib/store/dataStore';

export function Main() {
  const { trending } = dataStore();
  return (
    <div className="w-full flex-1 overflow-hidden">
      <div className="flex h-[calc(100vh-12rem)] flex-col space-y-10 px-10">
        <MainCard data={trending} />
        <Genres />
        <div className="flex items-center justify-between">
          <small className="uppercase">Project by Lorre Huggan</small>
          <small>Utilising TMDB</small>
        </div>
      </div>
    </div>
  );
}
