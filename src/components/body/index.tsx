import { Main } from './Main/index.';
import { Genres } from './Aside/Genres';
import { NewTrailers } from './Aside/index.';

export default function Body() {
  return (
    <section className="flex">
      <aside className="flex min-w-[650px] flex-col border-r-[1px] border-base-700">
        <NewTrailers />
        <Genres />
      </aside>
      <Main />
    </section>
  );
}
