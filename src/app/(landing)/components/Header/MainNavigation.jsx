import Link from "next/link";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <div>
      <div>
        <h1>
          <Link href="/">First Project</Link>
        </h1>
      </div>
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
};

export default MainNavigation;
