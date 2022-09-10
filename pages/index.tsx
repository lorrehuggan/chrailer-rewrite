import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Body from '../src/components/body';
import Header from '../src/components/header';
import {
  FETCH_GENRE,
  FETCH_POPULAR,
  FETCH_TOP_RATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
} from '../src/lib/movie-API';
import { useTrendingState } from '../src/lib/stor/trending';
import { IGenre, IMovie } from '../src/types/movie';

interface Props {
  trending: IMovie[];
  upcoming: IMovie[];
  top_rated: IMovie[];
  popular: IMovie[];
  genre: IGenre[];
}

const Home: NextPage<Props> = ({
  trending,
  genre,
  upcoming,
  top_rated,
  popular,
}) => {
  const setTrending = useTrendingState((state) => {});

  return (
    <>
      <Head>
        <title>Chrailer</title>
        <meta name="description" content="Movie Streaming..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-base-900 text-base-50">
        <Header />
        <div className="mx-auto h-[1px] w-2/3 bg-base-700" />
        <Body trending={trending} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const getData = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const trending = await getData(FETCH_TRENDING(1));
  const genre = await getData(FETCH_GENRE());
  const upcoming = await getData(FETCH_UPCOMING());
  const top_rated = await getData(FETCH_TOP_RATED());
  const popular = await getData(FETCH_POPULAR());

  return {
    props: {
      trending: trending.results,
      genre: genre.genres,
      upcoming: upcoming.results,
      top_rated: top_rated.results,
      popular: popular.results,
    },
    revalidate: 259200,
  };
};
