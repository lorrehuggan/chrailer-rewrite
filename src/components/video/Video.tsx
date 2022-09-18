import React, { useEffect, useMemo, useState } from 'react';
import { IMoviePage } from '../../types/movie';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import videoStore from '../../lib/store/videoStore';

export interface IVideoProps {
  movie: IMoviePage;
}

const opts: any = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    modestbranding: 1,
    enablejsapi: 1,
    disablekb: 1,
  },
};

export default function Video({ movie }: IVideoProps) {
  const [videoID, setVideoID] = useState<string | null>(null);
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const { updatePlaying } = videoStore();

  useEffect(() => {
    movieTrailer(movie.title || movie.original_title, {
      id: true,
    }).then((res: any) => {
      setVideoID(res);
    });
  }, [movie]);

  useEffect(() => {
    setScreen({
      x: window.innerWidth,
      y: window.innerHeight - 340,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setScreen({
        x: window.innerWidth,
        y: window.innerHeight - 340,
      });
    });
    return () => {
      window.removeEventListener('resize', (e) => {
        setScreen({
          x: window.innerWidth,
          y: window.innerHeight - 340,
        });
      });
    };
  }, []);

  function windowSize() {
    setScreen({
      x: window.innerWidth,
      y: window.innerHeight - 140,
    });
    console.log(screen);
  }

  return (
    <div style={{ height: `${screen.y}px` }} className={`mx-auto aspect-video`}>
      {videoID && (
        <YouTube
          onPlay={() => {
            console.log('play');
            updatePlaying(true);
          }}
          onEnd={() => {
            console.log('end');
            updatePlaying(false);
          }}
          videoId={videoID}
          opts={{ ...opts, height: `${screen.y}px`, width: `${screen.x}px` }}
        />
      )}
    </div>
  );
}
