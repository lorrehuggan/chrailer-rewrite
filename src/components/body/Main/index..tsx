import { Genres } from './Genres';
import { MainCard } from '../Cards/MainCard';

export function Main() {
  return (
    <div className="w-full flex-1 overflow-hidden">
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
      <div className="flex h-[calc(100vh-19rem)] flex-col space-y-10 px-10">
        <MainCard />
        <Genres />
      </div>
    </div>
  );
}
