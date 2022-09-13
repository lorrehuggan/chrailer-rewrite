import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
import Links from './Links';
import Tagline from './Tagline';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <Tagline />
      <header className="flex h-44 items-center justify-between px-10">
        <div className="flex items-center gap-16">
          <Logo />
          <Links />
        </div>
        <Icons />
      </header>
    </>
  );
}
