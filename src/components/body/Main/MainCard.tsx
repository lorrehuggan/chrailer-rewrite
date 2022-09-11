import React from 'react';
import { IMAGE_PATH } from '../../../lib/movie-API';
import dataStore from '../../../lib/store/dataStore';

const movie = 15;

export function MainCard() {
  const { trending } = dataStore();

  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_PATH + trending[movie]?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 35%',
      }}
      className="relative flex h-72 w-full flex-col justify-between overflow-hidden rounded-xl p-5 shadow-lg"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-base-500/70 mix-blend-color" />
      <div className="absolute top-0 left-0 h-full w-full bg-base-500/70 mix-blend-overlay" />
      <div className="absolute top-0 left-0 h-full w-full bg-base-800/60" />

      <h1 className=" z-40 overflow-hidden text-ellipsis font-display text-7xl italic">
        {trending[movie]?.title ||
          trending[movie]?.original_title ||
          trending[movie]?.name}
      </h1>
      <div className="z-40 flex items-center justify-between">
        <p className="w-2/5">{trending[movie]?.overview}</p>
        <div className="rounded-lg bg-white/10 p-4">
          <p>Play</p>
        </div>
      </div>
      <div className="absolute top-5 right-5 z-30 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-9  fill-accent stroke-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <span className="font-display text-2xl text-accent">
          {trending[movie]?.vote_average.toFixed(1)}
        </span>
      </div>
    </div>
  );
}
