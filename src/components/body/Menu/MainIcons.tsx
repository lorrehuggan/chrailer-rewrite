import Link from 'next/link';
import userStore from '../../../lib/store/userStore';
import supabase from '../../../lib/utils/supabaseClient';

export interface IMainIconsProps {}

export default function MainIcons(props: IMainIconsProps) {
  const { user } = userStore();

  const signInWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: 'google',
    });
  };

  return (
    <div className="flex flex-col gap-6 border-b pb-6 text-center">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="color-trans h-6 w-6 cursor-pointer hover:stroke-secondary"
        >
          <title>Home</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>

      {!user && (
        <button onClick={signInWithGoogle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="color-trans h-6 w-6 cursor-pointer hover:stroke-secondary"
          >
            <title>{'Click to Log-in'}</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      )}
      {user && (
        <Link href={`/user`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="color-trans h-6 w-6 cursor-pointer hover:stroke-secondary"
          >
            <title>{'Favorites'}</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
