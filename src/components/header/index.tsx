import Logo from './Logo';
import Links from './Links';
import Tagline from './Tagline';
import UseAuth from '../../lib/hooks/useAuth';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { signInWithGoogle, signOut, user, session } = UseAuth();

  return (
    <>
      <Tagline />
      <header className="flex h-44 items-center justify-between px-10">
        <div className="flex items-center gap-16">
          <Logo />
          <Links />
        </div>
        {user && (
          <>
            <span>{user.id}</span>
            <button onClick={signOut}>sign out</button>
          </>
        )}
        {!user && <button onClick={signInWithGoogle}>sign in</button>}
      </header>
    </>
  );
}
