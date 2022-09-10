import React from 'react';
import { IGenre } from '../../types/movie';

export function Genres({}) {
  return (
    <div className="h-1/3 w-full space-y-8 bg-base-700 p-10">
      <h3 className="">Popular Genres</h3>
      <div className="flex w-full flex-wrap gap-2">
        <div className="rounded-lg bg-secondary p-2">
          <span>Hello</span>
        </div>
        <div className="rounded-lg bg-primary p-2">
          <span>Hello</span>
        </div>
        <div className="rounded-lg bg-accent p-2">
          <span>Hello</span>
        </div>
      </div>
    </div>
  );
}
