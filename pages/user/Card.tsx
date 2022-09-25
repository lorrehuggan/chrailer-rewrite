import Link from 'next/link';
import Filter from '../../src/components/body/Cards/Filter';
import { IMAGE_PATH } from '../../src/lib/movie-API';
import { IMoviePage } from '../../src/types/movie';
import { ClockIcon } from '@heroicons/react/24/solid';

interface Props {
  movie: IMoviePage;
}

export default function Card({ movie }: Props) {
  return (
    <div key={movie?.id} className="flex w-[30rem] gap-3">
      <Link href={`/movie/${movie?.id}`}>
        <div
          className="relative aspect-[3/4.5] w-24 cursor-pointer rounded-md shadow-md md:w-52"
          style={{
            backgroundImage: `url(${IMAGE_PATH + movie.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: '0% 35%',
          }}
        >
          <Filter />
        </div>
      </Link>
      <div className="flex w-52 flex-col justify-between ">
        <div className="space-y-2">
          <p className=" truncate text-lg font-bold">
            {movie?.original_title || movie?.title}
          </p>
          <p>{movie?.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md p-1 ">
            <ClockIcon className="h-4 w-4 fill-transparent stroke-white" />
            <small className="font-bold">{`${movie?.runtime} mins`}</small>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-neutral-50 p-1 text-neutral-900">
            <svg
              onClick={() => {}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`color-trans h-4 w-4 cursor-pointer fill-red-500 stroke-red-500 `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {movie?.vote_average && (
              <small
                className="
              font-bold"
              >
                {movie?.vote_average.toFixed(1)}
              </small>
            )}
          </div>

          <Link href={`/movie/${movie?.id}`}>
            <div className="flex cursor-pointer items-center gap-1 rounded-md bg-green-400 p-1 text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>

              <small
                className="
              font-bold"
              >
                Play
              </small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
