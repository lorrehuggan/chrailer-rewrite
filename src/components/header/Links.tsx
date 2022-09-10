import React from 'react';

export interface ILinksProps {}

export default function Links(props: ILinksProps) {
  return (
    <ul className="hidden gap-6 lg:flex">
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <a href="">Movies</a>
      </li>
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <a href="">Animations</a>
      </li>
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <a href="">Sci-fi</a>
      </li>
      <li className="transition-color text-lg font-bold text-base-400 duration-300 ease-in-out hover:text-base-50">
        <a href="">Documentary</a>
      </li>
    </ul>
  );
}
