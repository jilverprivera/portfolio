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
    <div className="w-full fixed backdrop-blur-sm z-50">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
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
                className={`uppercase mx-1 text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md ${
                  pathname === item.path
                    ? "font-bold  dark:text-yellow-500"
                    : "font-medium"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          {/* <span className="uppercase mx-2 text-sm cursor-pointer">Connect</span> */}
          {renderTheme()}
        </div>
      </div>
    </div>
  );
};

export default Header;
