import Link from 'next/link';
import userStore from '../../../lib/store/userStore';
import supabase from '../../../lib/utils/supabaseClient';
import MainIcons from './MainIcons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export interface IMobileMenuProps {}

export default function MobileMenu(props: IMobileMenuProps) {
  const { menuIsOpen, setMenuIsOpen, user, setUser } = userStore();
  const [isMoviePage, setIsMoviePage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes('movie')) {
      setIsMoviePage(true);
    }
    return () => {
      setIsMoviePage(false);
    };
  }, [router]);

  const signInWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: 'google',
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div
      onClick={handleClick}
      className={`absolute top-0 left-0 z-50 mt-[6.25rem] h-[calc(100vh-6.25rem)] w-screen
       ${
         menuIsOpen ? '-translate-x-[0%]' : '-translate-x-[100%]'
       }  ease-[cubic-bezier(0.85, 0, 0.15, 1)]  flex flex-col items-center justify-center gap-4 ${
        isMoviePage ? 'bg-black' : 'bg-base-900'
      }  transition-transform duration-700 md:hidden`}
    >
      <p className="mb-4 text-3xl">Menu</p>
      <ul className="gap-6 text-center lg:flex">
        <li className="transition-color text-lg  text-base-50 duration-300 ease-in-out hover:text-base-50">
          <Link href="/genre/16">Animation</Link>
        </li>
        <li className="transition-color text-lg  text-base-50 duration-300 ease-in-out hover:text-base-50">
          <Link href="/genre/878">Sci-fi</Link>
        </li>
        <li className="transition-color text-lg  text-base-50 duration-300 ease-in-out hover:text-base-50">
          <Link href="/genre/99">Documentary</Link>
        </li>
      </ul>
      <MainIcons />
      {user ? (
        <div onClick={signOut} className="border-[0.5px] p-2 ">
          <small>
            Log out <span>{user.email?.split('@')[0]}</span>
          </small>
        </div>
      ) : (
        <div onClick={signInWithGoogle} className="border-[0.5px] p-2">
          <small>Login With Google</small>
        </div>
      )}
      <p></p>
    </div>
  );
}
