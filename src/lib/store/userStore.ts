import { Session, User } from '@supabase/supabase-js';
import create from 'zustand';

interface UserState {
  user: User | null;
  session: Session | null;
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
}));

export default userStore;
