import { GetServerSideProps } from 'next';
import { IMoviePage, IMovie, IKeywords } from '../../src/types/movie';
import {
  FETCH_BY_ID,
  FETCH_KEYWORDS,
  FETCH_RECOMMENDATIONS,
  FETCH_SIMILAR,
} from '../../src/lib/movie-API';
import Head from 'next/head';
import Header from '../../src/components/header';
import Video from '../../src/components/video/Video';
import videoStore from '../../src/lib/store/videoStore';
import Info from '../../src/components/video/Info';
import MobileMenu from '../../src/components/body/Menu/MobileMenu';
import Menu from '../../src/components/body/Menu/index.';

export interface IMoviePageProps {
  movie: IMoviePage;
  similar: IMovie[];
  recommended: IMovie[];
  keywords: IKeywords[];
}

export default function MoviePage({
  movie,
  similar,
  recommended,
  keywords,
}: IMoviePageProps) {
  const {} = videoStore();
  return (
    <>
      <Head>
        <title>{movie.title || movie.original_title}</title>
        <meta name="description" content={movie.overview} />
        <meta
          name="keywords"
          content={
            JSON.stringify(keywords.map((keyword) => keyword.name))
              .split('[')[1]
              .split(']')[0]
          }
        />
      </Head>
      <main className="max-h-screen min-h-screen overflow-hidden bg-black text-base-50">
        <MobileMenu />
        {/* <Menu /> */}
        <Header />
        <Info movie={movie} />
        <Video movie={movie} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const getData = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const movie = await getData(FETCH_BY_ID(params?.id));
  const recommended = await getData(FETCH_RECOMMENDATIONS(movie.id));
  const similar = await getData(FETCH_SIMILAR(movie.id));
  const keywords = await getData(FETCH_KEYWORDS(movie.id));

  return {
    props: {
      movie,
      similar: similar.results,
      recommended: recommended.results,
      keywords: keywords.keywords,
    },
  };
};
