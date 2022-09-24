import { Main } from './Main/index.';
import Menu from './Menu/index.';
import MobileMenu from './Menu/MobileMenu';

export default function Body() {
  return (
    <section className="flex">
      <MobileMenu />
      <Menu />
      <Main />
    </section>
  );
}
