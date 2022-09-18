import { Main } from './Main/index.';
import Menu from './Menu/index.';
import NewTrailers from './Menu/index.';

export default function Body() {
  return (
    <section className="flex">
      <Menu />
      <Main />
    </section>
  );
}
