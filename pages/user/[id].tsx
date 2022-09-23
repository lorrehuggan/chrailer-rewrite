import Head from 'next/head';
import { useEffect, useState } from 'react';
import Menu from '../../src/components/body/Menu/index.';
import Header from '../../src/components/header';
import userStore from '../../src/lib/store/userStore';
import supabase from '../../src/lib/utils/supabaseClient';
import { useRouter } from 'next/router';
import UseFetch from '../../src/lib/hooks/useFetch';
import { GetServerSideProps } from 'next';
import { FETCH_BY_ID } from '../../src/lib/movie-API';

export interface IUserProps {}

interface SupaBaseData {
  genre_likes: null | number[];
  movie_likes: null | number[];
}

export default function User(props: IUserProps) {
  const router = useRouter();
  const { user } = userStore();
  const [userLikes, setUserLikes] = useState<SupaBaseData | null>(null);

  const fetchData = async (id: number) => {
    const res = await fetch(FETCH_BY_ID(String(id)));
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const userMovieLikes = async () => {
      let { data, error } = await supabase
        .from('user')
        .select('movie_likes,genre_likes')
        .eq('user_id', user?.id);
      console.log(data);
      if (data) {
        setUserLikes(data[0]);
      }
    };

    if (user) userMovieLikes();
  }, [user]);

  return (
    <>
      <Head>
        <title>{user?.email?.split('@')[0]}</title>
        <meta name="description" content="My Favorite Films" />
      </Head>
      <main className="max-h-screen min-h-screen overflow-hidden bg-base-900 text-base-50">
        <Header />
        <section className="flex">
          <Menu />
          <div className="flex-1">{JSON.stringify(userLikes)}</div>
        </section>
      </main>
    </>
  );
}
