import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
          className="w-10 h-10 ml-2 rounded-lg border-2 flex items-center justify-center"
        >
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="w-10 h-10 ml-2 rounded-lg border-2 flex items-center justify-center"
        >
          <BsFillMoonFill />
        </button>
      );
    }
  };

  return (
    <div className="w-full backdrop-blur-sm z-50">
      <div className="h-24 max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={`/icon.svg`}
            alt="Jilver Pacheco"
            width={60}
            height={60}
          />
        </Link>

        <div className="flex items-center justify-center">
          {routes.map((item, i) => (
            <Link key={i} href={item.path}>
              <span
                className={`uppercase mx-3 text-sm cursor-pointer  ${
                  pathname === item.path
                    ? "font-bold  dark:text-yellow-500"
                    : "font-medium"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          {renderTheme()}
        </div>
      </div>
    </div>
  );
};

export default Header;
