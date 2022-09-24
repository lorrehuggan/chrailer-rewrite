import { Session, User } from '@supabase/supabase-js';
import create from 'zustand';
import { IMoviePage } from '../../types/movie';

interface UserState {
  user: User | null;
  session: Session | null;
  movieLikes: IMoviePage[] | null;
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
  setMovieLikes: (movieLikes: IMoviePage[]) => void;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
}

const userStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) =>
    set(() => ({
      user,
    })),
  session: null,
  setSession: (session: Session | null) =>
    set(() => ({
      session,
    })),
  movieLikes: null,
  setMovieLikes: (movieLikes: IMoviePage[]) =>
    set(() => ({
      movieLikes,
    })),
  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen: boolean) =>
    set(() => ({
      menuIsOpen,
    })),
}));

export default userStore;
