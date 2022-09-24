import Link from 'next/link';
import userStore from '../../lib/store/userStore';
import videoStore from '../../lib/store/videoStore';

export default function Logo({}) {
  const { updatePlaying } = videoStore();
  const { setMenuIsOpen } = userStore();

  const handleClick = () => {
    updatePlaying(false);
    setMenuIsOpen(false);
  };

  return (
    <div>
      <Link href="/">
        <span
          onClick={handleClick}
          className="cursor-pointer font-display text-xl font-black italic md:text-4xl"
        >
          CHRAILER
        </span>
      </Link>
      <div className="main-gradient h-1"></div>
    </div>
  );
}
