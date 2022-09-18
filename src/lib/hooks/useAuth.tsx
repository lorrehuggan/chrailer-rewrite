import React, { useEffect } from 'react';
import userStore from '../store/userStore';
import supabase from '../utils/supabaseClient';

export default function UseAuth() {
  const { setUser, setSession, session, user } = userStore();

  useEffect(() => {
    const userData = supabase.auth.user();
    setUser(userData);
    const session = supabase.auth.session();
    setSession(session);
    window.addEventListener('hashchange', () => {
      const userData = supabase.auth.user();
      setUser(userData);
      const session = supabase.auth.session();
      setSession(session);
    });
  }, [setSession, setUser]);

  const signInWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: 'google',
    });
  };
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  return { user, signInWithGoogle, signOut, session };
}
