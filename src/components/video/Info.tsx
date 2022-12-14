import Link from 'next/link';
import { useEffect, useState } from 'react';
import userStore from '../../lib/store/userStore';
import supabase from '../../lib/utils/supabaseClient';
import { IMoviePage } from '../../types/movie';

export interface IInfoProps {
  movie: IMoviePage;
}

interface DataBase {
  created_at: Date;
  id: number;
  movie_likes: number[];
  user_id: string;
  genre_likes: number[];
}

export default function Info({ movie }: IInfoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = userStore();

  useEffect(() => {
    const getData = async () => {
      const { data, error }: { data: DataBase | null; error: any } =
        await supabase
          .from('user')
          .select('*')
          .eq('user_id', user?.id)
          .single();
      if (data) {
        //setLikes(data.likes);
        const filterLikes = data.movie_likes.find((id) => {
          return id === movie.id;
        });
        if (filterLikes) {
          setIsLiked(true);
        }
      }
    };
    if (user) {
      getData();
    }
  }, [user, movie.id]);

  const signInWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: 'google',
    });
  };

  const handleLike = async () => {
    const { data: likeArray, error }: { data: DataBase | null; error: any } =
      await supabase.from('user').select('*').eq('user_id', user?.id).single();

    const filterLikes = likeArray?.movie_likes.find((id) => {
      return id === movie.id;
    });

    if (!filterLikes && likeArray) {
      setIsLiked(true);
      const { data, error } = await supabase
        .from('user')
        .update({ movie_likes: [...likeArray.movie_likes, movie.id] })
        .eq('user_id', user?.id);
    }

    if (filterLikes && likeArray) {
      const filter = likeArray?.movie_likes.filter((id) => {
        return id !== movie.id;
      });
      console.log(filter);
      setIsLiked(false);
      const { data, error } = await supabase
        .from('user')
        .update({ movie_likes: [...filter] })
        .eq('user_id', user?.id);
    }
  };

  return (
    <div className="mb-2 px-2 transition-all duration-1000 ease-in-out md:px-10">
      <div className="flex  justify-between">
        <div className="flex flex-1 items-center gap-2">
          <h4 className="tracking-tighter md:text-4xl">
            {movie.original_title || movie.title}
          </h4>
        </div>
        <div className="flex items-center justify-between gap-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <Link key={genre.id} href={`/genre/${genre.id}`}>
              <small className="color-trans cursor-pointer font-bold uppercase hover:text-secondary">
                {genre.name}
              </small>
            </Link>
          ))}

          <div
            onClick={() => {
              if (user) {
                handleLike();
                return;
              }
              signInWithGoogle();
            }}
            className="flex items-center gap-1 rounded-md bg-neutral-50 py-[2px] px-1 text-neutral-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`color-trans h-4 w-4 cursor-pointer ${
                isLiked ? 'fill-secondary stroke-secondary' : 'fill-transparent'
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <small>{movie.vote_average.toFixed(1)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
