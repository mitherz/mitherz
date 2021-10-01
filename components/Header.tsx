import Link from "next/link";
import React from "react";

export interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-row gap-4 p-10">
      <div className="flex-1"></div>
      <Link href="/">
        <a className="flex flex-col gap-0">
          <span>...mit</span>
          <span>herz!</span>
        </a>
      </Link>
    </header>
  );
};

export default Header;
