"use client";

import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/darkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className="flex items-center justify-between ">
      <Link href="/" className="font-bold text-2xl">
        lamamia
      </Link>

      <div className="flex space-x-4 ml-96">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className="p-0.5 bg-green-700 text-white cursor-pointer border-r-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
