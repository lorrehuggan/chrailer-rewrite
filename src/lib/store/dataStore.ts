import create from 'zustand';
import { IGenre, IMovie } from '../../types/movie';

interface TrendingState {
  trending: IMovie[] | [];
  upcoming: IMovie[] | [];
  top_rated: IMovie[] | [];
  popular: IMovie[] | [];
  genres: IGenre[] | [];
  addTrending: (trending: IMovie[]) => void;
  addUpcoming: (upcoming: IMovie[]) => void;
  addTopRated: (top_rated: IMovie[]) => void;
  addPopular: (popular: IMovie[]) => void;
  addGenres: (genres: IGenre[]) => void;
}

const dataStore = create<TrendingState>((set) => ({
  trending: [],
  upcoming: [],
  top_rated: [],
  popular: [],
  genres: [],
  addTrending: (trending: IMovie[]) =>
    set(() => ({
      trending,
    })),
  addUpcoming: (upcoming: IMovie[]) =>
    set(() => ({
      upcoming,
    })),
  addTopRated: (top_rated: IMovie[]) =>
    set(() => ({
      top_rated,
    })),
  addPopular: (popular: IMovie[]) =>
    set(() => ({
      popular,
    })),
  addGenres: (genres: IGenre[]) =>
    set(() => ({
      genres,
    })),
}));

export default dataStore;
