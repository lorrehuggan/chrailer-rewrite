import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import {
  FETCH_GENRE,
  FETCH_TOP_RATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
} from '../src/lib/movie-API';
import { IGenre, IMovie } from '../src/types/movie';

interface Props {
  trending: IMovie[];
  upcoming: IMovie[];
  top_rated: IMovie[];
  genre: IGenre[];
}

const Home: NextPage<Props> = ({ trending, genre, upcoming, top_rated }) => {
  console.log({ trending });

  return (
    <div>
      <Head>
        <title>Chrailer</title>
        <meta name="description" content="Movie Streaming..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {trending.map((trend) => (
          <p key={trend.id}>{trend.title}</p>
        ))}
      </main>
    </div>
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
  let trending = await getData(FETCH_TRENDING(1));
  let genre = await getData(FETCH_GENRE());
  let upcoming = await getData(FETCH_UPCOMING());
  let top_rated = await getData(FETCH_TOP_RATED());

  return {
    props: {
      trending: trending.results,
      genre: genre.genres,
      upcoming: upcoming.results,
      top_rated: top_rated.results,
    },
    revalidate: 259200,
  };
};
