import Link from 'next/link';
import React from 'react';

export interface ILinksProps {}

export default function Links(props: ILinksProps) {
  return (
    <ul className="hidden gap-6 lg:flex">
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <Link href="/genre/16">Animation</Link>
      </li>
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <Link href="/genre/878">Sci-fi</Link>
      </li>
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <Link href="/genre/99">Documentary</Link>
      </li>
    </ul>
  );
}
