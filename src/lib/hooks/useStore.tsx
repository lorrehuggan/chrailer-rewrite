import { useEffect, useCallback } from 'react';
import { IGenre, IMovie } from '../../types/movie';
import dataStore from '../store/dataStore';

export interface StoreProps {
  trending: IMovie[];
  upcoming: IMovie[];
  top_rated: IMovie[];
  popular: IMovie[];
  genre: IGenre[];
}

export default function UseStore({
  trending,
  genre,
  upcoming,
  top_rated,
  popular,
}: StoreProps) {
  const { addTrending, addUpcoming, addPopular, addTopRated, addGenres } =
    dataStore();

  useEffect(() => {
    addTrending(trending);
  }, [addTrending, trending]);

  useEffect(() => {
    addUpcoming(upcoming);
  }, [addUpcoming, upcoming]);

  useEffect(() => {
    addPopular(popular);
  }, [addPopular, popular]);

  useEffect(() => {
    addTopRated(top_rated);
  }, [addTopRated, top_rated]);

  useEffect(() => {
    addGenres(genre);
  }, [addGenres, genre]);

  return {};
}
