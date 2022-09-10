import create from 'zustand';
import { IMovie } from '../../types/movie';

export const useTrendingState = create((set) => ({
  trending: null,
  setTrending: () => set((state: null | IMovie[]) => ({ ...state })),
  clearTrending: () => set({ trending: null }),
}));

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
