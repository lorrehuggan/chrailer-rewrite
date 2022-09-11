import { MainCard } from './MainCard';

export function Main() {
  return (
    <div className="min-h-[calc(100vh-12.5rem)] w-full flex-1 overflow-hidden">
      <div className="sticky top-0 z-50 flex h-28 justify-end px-10">
        <div className="flex items-center gap-1">
          <input
            placeholder="Search"
            type="text"
            className="border-b-[1px] border-white bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="max-w-full px-10">
        <MainCard />
      </div>
    </div>
  );
}
