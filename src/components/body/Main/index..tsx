import { Genres } from './Genres';
import { MainCard } from '../Cards/MainCard';
import dataStore from '../../../lib/store/dataStore';

export function Main() {
  const { trending } = dataStore();
  return (
    <div className="w-full flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex h-28 items-center justify-between px-10">
        <div>
          <h2 className="text-5xl">🔥🔥🔥</h2>
        </div>
        <div className="flex items-center gap-1">
          <input
            placeholder="Search"
            type="text"
            className="rounded-2xl border-[1px] border-white bg-transparent p-3 outline-none"
          />
        </div>
      </div>
      <div className="flex h-[calc(100vh-19rem)] flex-col space-y-10 px-10">
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
