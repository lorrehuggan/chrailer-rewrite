import { Genres } from './Genres';
import { NewTrailers } from './NewTrailers';
import { Aside } from './Aside';
import * as React from 'react';
import { IMovie } from '../../types/movie';

export interface IBodyProps {
  trending: IMovie[];
}

export default function Body({ trending }: IBodyProps) {
  return (
    <section className="flex">
      <aside className="flex min-h-[calc(100vh-12.5rem)] w-1/4 flex-col border-r-[1px] border-base-700">
        <NewTrailers trending={trending} />
        <Genres />
      </aside>
      <div className="min-h-[calc(100vh-12.5rem)] flex-1"></div>
    </section>
  );
}
