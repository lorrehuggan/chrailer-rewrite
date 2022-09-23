import dataStore from '../../../lib/store/dataStore';
import MainIcons from './MainIcons';

export default function Menu({}) {
  const { trending } = dataStore();

  return (
    <div className="z-50 flex h-screen w-24 flex-col items-center space-y-10 border-r-[1px] border-base-600 px-2 py-10 transition-transform duration-500 ease-out ">
      <MainIcons />
    </div>
  );
}
