import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { Link as NavLink } from "react-scroll";
import { useEffect, useState } from "react";

const routes = [
  { path: "about", name: "About Me" },
  { path: "portfolio", name: "Portfolio" },
  { path: "blog", name: "Blog" },
];

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { pathname } = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();

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
          className="w-10 h-10 rounded-lg border-2 flex items-center justify-center"
        >
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="w-10 h-10 rounded-lg border-2 flex items-center justify-center"
        >
          <BsFillMoonFill />
        </button>
      );
    }
  };
  return (
    <div className="w-full fixed backdrop-blur-sm z-50">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        {pathname === "/" ? (
          <NavLink
            to="banner"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="cursor-pointer"
          >
            <Image
              src={`/icon.svg`}
              alt="Jilver Pacheco"
              width={60}
              height={60}
            />
          </NavLink>
        ) : (
          <Link href="/">
            <Image
              src={`/icon.svg`}
              alt="Jilver Pacheco"
              width={60}
              height={60}
            />
          </Link>
        )}

        <div className="flex items-center justify-center">
          {routes.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="font-normal"
              activeClass="font-bold"
            >
              <span className=" uppercase mx-2 text-sm cursor-pointer">
                {item.name}
              </span>
            </NavLink>
          ))}
          <span className=" uppercase mx-2 text-sm cursor-pointer">
            Connect
          </span>
          {renderTheme()}
        </div>
      </div>
    </div>
  );
};

export default Header;
