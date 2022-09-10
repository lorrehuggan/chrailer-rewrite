import React from 'react';
import { IMovie } from '../../types/movie';

export interface IBodyProps {
  latest_movies: IMovie[];
}

export function Aside({ latest_movies }: IBodyProps) {
  return (
    <aside className="flex min-h-[calc(100vh-12.5rem)] w-1/4 flex-col border-r-[1px] border-base-700">
      <div className="flex-1 p-10">
        <div className="flex justify-between">
          <h3 className="">New trailers</h3>
          <div>
            <small>Sort By:</small>
          </div>
        </div>
      </div>
      <div className="h-1/3 w-full bg-base-700"></div>
    </aside>
  );
}
