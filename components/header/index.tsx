import { useState } from "react";
import Link from "next/link";

interface Props {
  navItems: NavType[];
}

export type NavType = {
  name: string;
  slug: string;
};

const Header: React.FC<Props> = ({ navItems }) => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className="header">
      <Link href="/" passHref={true}>
        <h1 className="header__logo">
          <img src="/new-yorker.svg" alt="The New Yorker" />
        </h1>
      </Link>
      <button onClick={() => setToggleNav(!toggleNav)} className="nav-toggler">
        Categories
      </button>
      <nav className={`nav ${toggleNav ? "show" : "hide"}`}>
        <button onClick={() => setToggleNav(!toggleNav)} className="nav-close">
          Close nav
        </button>
        <ul className="nav__ul">
          {navItems ? (
            <>
              {navItems.map((nav: NavType) => {
                return (
                  <li
                    key={nav.slug}
                    className="nav__li"
                    onClick={() => setToggleNav(false)}
                  >
                    <Link className="nav__link" href={`/category/${nav.slug}`}>
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <span>Loading</span>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
