import { ReactNode } from "react";
import Header from "../header";

type LayoutType = {
  children: ReactNode;
  navItems: string[];
};
const Layout: React.FC<LayoutType> = ({ children, navItems }) => {
  return (
    <>
      <Header navItems={navItems} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <footer />
    </>
  );
};

export default Layout;
