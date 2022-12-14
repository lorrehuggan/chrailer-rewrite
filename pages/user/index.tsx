import Head from 'next/head';
import { useEffect, useState } from 'react';
import Menu from '../../src/components/body/Menu/index.';
import Header from '../../src/components/header';
import userStore from '../../src/lib/store/userStore';
import supabase from '../../src/lib/utils/supabaseClient';
import { IMoviePage } from '../../src/types/movie';
import UseFetch from '../../src/lib/hooks/useFetch';
import Main from './Main';
import MobileMenu from '../../src/components/body/Menu/MobileMenu';

export default function User() {
  const { user, setMovieLikes, movieLikes } = userStore();
  const [movieIds, setMovieIds] = useState('');
  const [error, setError] = useState<string | null>(null);
  const {
    isError,
    isLoading,
    data,
  }: { data: IMoviePage[]; isLoading: boolean; isError: boolean } = UseFetch({
    key: movieIds,
    url: `/api/user?id=${movieIds}&page=1`,
    variable: movieIds,
  });

  useEffect(() => {
    const userMovieLikes = async () => {
      let { data, error } = await supabase
        .from('user')
        .select('movie_likes,genre_likes')
        .eq('user_id', user?.id);
      if (error) {
        setError(error.message);
      }
      if (data) {
        setMovieIds(data[0].movie_likes);
      }
    };

    if (user) userMovieLikes();
  }, [user]);

  useEffect(() => {
    if (data) {
      setMovieLikes(data);
    }
  }, [data, setMovieLikes]);

  return (
    <>
      <Head>
        <title>{user?.email?.split('@')[0]}</title>
        <meta name="description" content="My Favorite Films" />
      </Head>
      <main className=" min-h-screen overflow-hidden bg-base-900 pb-10 text-base-50 md:max-h-screen md:pb-0">
        <Header />
        <MobileMenu />
        <section className="flex">
          <Menu />
          <div className=" flex-1 overflow-y-scroll md:h-screen ">
            <Main isLoading={isLoading} />
          </div>
        </section>
      </main>
    </>
  );
}
