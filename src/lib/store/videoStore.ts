import create from 'zustand';

interface VideoState {
  isPlaying: boolean;
  updatePlaying: (boolean: boolean) => void;
}

const videoStore = create<VideoState>((set) => ({
  isPlaying: false,
  updatePlaying: (boolean: boolean) => {
    set((state) => ({
      isPlaying: boolean,
    }));
  },
}));

export default videoStore;
