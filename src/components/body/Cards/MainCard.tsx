import Image from 'next/future/image';
import Link from 'next/link';
import { IMAGE_PATH } from '../../../lib/movie-API';
import dataStore from '../../../lib/store/dataStore';
import { IMovie } from '../../../types/movie';
import Filter from './Filter';

interface Props {
  data: IMovie[];
}
const movie = 3;

export function MainCard({ data }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_PATH + data[movie]?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 35%',
      }}
      className="relative flex  h-full w-full flex-1  flex-col justify-between overflow-hidden rounded-xl p-5 shadow-lg"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-base-800/60" />
      <div className="absolute left-0 top-0  h-full w-1/2 bg-gradient-to-tr from-black/50 via-transparent to-black/0"></div>
      <Filter />

      <h1 className="z-40 overflow-hidden truncate text-ellipsis py-2 font-display text-2xl italic drop-shadow-lg md:text-7xl">
        {data[movie]?.title || data[movie]?.original_title || data[movie]?.name}
      </h1>
      <div className="z-40 flex items-center gap-5">
        <Link href={`/movie/${data[movie]?.id}`} passHref>
          <div className="group cursor-pointer rounded-lg bg-white/10 p-4 transition-colors duration-200 ease-in-out hover:bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <title>Play</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        </Link>
        <div>
          <div className="hidden h-24 w-1/3 overflow-y-clip md:flex">
            <p className="text-ellipsis">{data[movie]?.overview}</p>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5">
        <div className="relative aspect-[3/4.5] w-20 overflow-hidden rounded shadow-lg lg:w-32">
          <Image
            src={IMAGE_PATH + data[movie]?.poster_path}
            alt={data[movie]?.original_title || 'Featured'}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
