"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const pathname = usePathname();

  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ul>
      <li>
        <Link
          href="/about"
          style={pathname === "/about" ? { color: "blue" } : { color: "black" }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          style={
            pathname === "/projects" ? { color: "blue" } : { color: "black" }
          }
        >
          Projects
        </Link>
      </li>
      {isAuth ? (
        <button>Logout</button>
      ) : (
        <button>
          <Link href="/login">Login</Link>
        </button>
      )}
    </ul>
  );
};

export default NavLinks;
