import Link from "next/link";

interface Props {
  navItems: string[];
}

// type NavType = {
//   name: string;
//   slug: string;
//   id: string;
// };

const Header: React.FC<Props> = ({ navItems }) => {
  return (
    <header className="header">
      <Link href="/" passHref={true}>
        <h1 className="header__logo">
          <img src="/new-yorker.svg" alt="The New Yorker" />
        </h1>
      </Link>
      <nav className="nav">
        <ul className="nav__ul">
          {navItems ? (
            <>
              {navItems.map((data) => {
                const slug = data.toLowerCase();
                return (
                  <li key={data} className="nav__li">
                    <a className="nav__link" href={`/categories/${slug}`}>
                      {data}
                    </a>
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
