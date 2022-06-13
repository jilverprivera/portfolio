import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { Logo } from "./Logo";

const routes = [
  { path: "/about", name: "About Me" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/blog", name: "Blog" },
];

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const { pathname } = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderTheme = () => {
    if (!isMounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="xs:w-9 xs:h-9 w-10 h-10 ml-2 rounded-lg bg-zinc-900  hover:border-zinc-700 hover:border-2  flex items-center justify-center"
        >
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="xs:w-9 xs:h-9 w-10 h-10 ml-2 flex items-center justify-center rounded-lg bg-zinc-100 hover:border-2 hover:border-zinc-300"
        >
          <BsFillMoonFill />
        </button>
      );
    }
  };

  return (
    <div className="w-full sticky backdrop-blur-sm z-50">
      <div className="xs:w-11/12 sm:w-11/12 md:w-11/12 lg:max-w-6xl mx-auto h-24 flex items-center justify-between">
        {isMounted && (
          <Link href="/">
            <a>
              <Logo
                width="55"
                height="55"
                bgColor={theme === "light" ? "#1F1F1F" : "#F8F8F8"}
                initials={theme === "light" ? "#FFFFFF" : "#1F1F1F"}
              />
            </a>
          </Link>
        )}
        <div className="flex items-center justify-center">
          <div className="xxs:hidden xs:hidden md:hidden lg:flex items-center justify-center ">
            {routes.map((item, i) => (
              <Link key={i} href={item.path}>
                <span
                  className={`uppercase mx-2 text-sm cursor-pointer text-zinc-600 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-300  ${
                    pathname.includes(item.path)
                      ? "dark:text-stone-100 font-bold"
                      : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          {renderTheme()}
          <button className="h-10 w-10 flex flex-col items-center justify-center rounded-lg ml-2 md:hidden lg:hidden outline-none border-none">
            <div className="w-8 h-1 bg-black dark:bg-gray-400 mb-1.5 rounded-lg" />
            <div className="w-8 h-1 bg-black dark:bg-gray-400 mb-1.5 rounded-lg" />
            <div className="w-8 h-1 bg-black dark:bg-gray-400 rounded-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
