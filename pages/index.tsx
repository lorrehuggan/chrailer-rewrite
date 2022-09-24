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
import UseStore, { StoreProps } from '../src/lib/hooks/useStore';

const Home: NextPage<StoreProps> = ({
  trending,
  genre,
  upcoming,
  top_rated,
  popular,
}) => {
  const {} = UseStore({ trending, genre, upcoming, top_rated, popular });

  return (
    <>
      <Head>
        <title>Chrailer</title>
        <meta name="description" content="Movie Streaming..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-h-screen min-h-screen overflow-hidden bg-base-900 text-base-50">
        <Header />
        <Body />
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
