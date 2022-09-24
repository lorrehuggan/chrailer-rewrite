import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import userStore from '../../src/lib/store/userStore';
import { Genre } from '../../src/types/movie';
import Card from './Card';

interface Props {
  isLoading: boolean;
}

export default function Main({ isLoading }: Props) {
  const { user, movieLikes } = userStore();

  return (
    <section className="space-y-10 px-8">
      <div className="">
        <h4 className="text-3xl font-bold">
          {isLoading ? 'Loading...' : 'My Favorites'}
        </h4>
      </div>
      <div className="flex flex-wrap gap-4">
        {movieLikes &&
          movieLikes?.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
