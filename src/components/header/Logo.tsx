import Link from 'next/link';
import videoStore from '../../lib/store/videoStore';

export default function Logo({}) {
  const { updatePlaying } = videoStore();
  return (
    <div>
      <Link href="/">
        <span
          onClick={() => updatePlaying(false)}
          className="cursor-pointer font-display font-black italic md:text-4xl"
        >
          CHRAILER
        </span>
      </Link>
      <div className="main-gradient h-1"></div>
    </div>
  );
}
