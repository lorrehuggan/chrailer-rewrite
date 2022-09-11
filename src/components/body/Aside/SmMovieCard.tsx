import React from 'react';
import { IMAGE_PATH } from '../../../lib/movie-API';
import { IMovie } from '../../../types/movie';

interface Props {
  image: string;
  title: string;
  date: Date;
  rating: number;
}

export function SmMovieCard({ image, title, date, rating }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_PATH + image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative h-72 w-full snap-start overflow-hidden rounded-xl"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-base-500/20 mix-blend-color" />
      <div className="absolute top-0 z-20 h-24 w-full bg-gradient-to-b from-base-900 to-transparent" />

      <div className="absolute bottom-10 right-8 z-30 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5  stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <span className="text-xl">{rating.toFixed(1)}</span>
      </div>
      <Info title={title} date={date} />
    </div>
  );
}

function Info({ title, date }: { title: string; date: Date }) {
  return (
    <div className="absolute bottom-0 left-0 z-20 flex h-24 w-full items-center justify-between bg-white/20 px-8 backdrop-blur">
      <div className="flex w-full items-center gap-2">
        <div className="color-trans group flex cursor-pointer items-center gap-[2px] rounded-lg p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="color-trans h-9 w-9 fill-white"
          >
            <title>Play</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-clip text-xl font-bold tracking-tighter">
            {title}
          </h4>
          {date && <p>{date.toString().split('-')[0]}</p>}
        </div>
      </div>
    </div>
  );
}
