import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { MainCard } from '../../src/components/body/Cards/MainCard';
import MovieGroup from '../../src/components/body/Main/MovieGroup';
import Menu from '../../src/components/body/Menu/index.';
import MobileMenu from '../../src/components/body/Menu/MobileMenu';
import Header from '../../src/components/header';
import { FETCH_CATEGORIES, FETCH_GENRE } from '../../src/lib/movie-API';
import { IMovie } from '../../src/types/movie';

export interface IGenreProps {
  pageOne: IMovie[];
  pageTwo: IMovie[];
  pageThree: IMovie[];
  pageFour: IMovie[];
  pageFive: IMovie[];
  genre: IGenre;
}

interface IGenre {
  id: number;
  name: 'string';
}

export default function Genre({
  pageOne,
  pageTwo,
  pageThree,
  pageFour,
  pageFive,
  genre,
}: IGenreProps) {
  return (
    <>
      <Head>
        <title>{`Chrailer - ${genre.name}`}</title>
        <meta name="description" content={`Chrailer ${genre.name} Films`} />
      </Head>
      <main className="max-h-screen min-h-screen overflow-hidden bg-base-900 text-base-50">
        <Header />
        <MobileMenu />
        <section className="flex">
          <Menu />
          <div className="w-full flex-1 overflow-hidden">
            <div className="flex h-[calc(100vh-12rem)] flex-col space-y-10 px-10">
              <h3 className="text-right uppercase">{genre.name}</h3>
              <MainCard data={pageOne} />
              <div className="scrollbar-hide flex-1 space-y-5 overflow-scroll pb-12">
                <MovieGroup data={pageOne} title="" />
                <MovieGroup data={pageTwo} title="" />
                <MovieGroup data={pageThree} title="" />
                <MovieGroup data={pageFour} title="" />
                <MovieGroup data={pageFive} title="" />
              </div>
            </div>
          </div>
        </section>
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

  const pageOne = await getData(FETCH_CATEGORIES(String(params?.id), 1));
  const pageTwo = await getData(FETCH_CATEGORIES(String(params?.id), 2));
  const pageThree = await getData(FETCH_CATEGORIES(String(params?.id), 3));
  const pageFour = await getData(FETCH_CATEGORIES(String(params?.id), 4));
  const pageFive = await getData(FETCH_CATEGORIES(String(params?.id), 5));
  const getGenre = await getData(FETCH_GENRE());

  const genre = getGenre.genres.filter((genre: any) => {
    return genre.id == params?.id;
  });

  return {
    props: {
      pageOne: pageOne.results,
      pageTwo: pageTwo.results,
      pageThree: pageThree.results,
      pageFour: pageFour.results,
      pageFive: pageFive.results,
      genre: genre[0],
    },
  };
};
