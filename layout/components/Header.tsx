import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { Logo } from "./Logo";

const routes = [
  // { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/portfolio", name: "Portfolio" },
];

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const { data: session } = useSession();
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
    <div className="">
      <div className="h-32 lg:max-w-screen-xl flex items-center justify-between mx-auto ">
        <div className="flex items-center">
          {isMounted && (
            <Link href="/">
              <a>
                <Logo
                  width="80"
                  height="80"
                  bgColor={theme === "light" ? "#1F1F1F" : "#F8F8F8"}
                  initials={theme === "light" ? "#FFFFFF" : "#1F1F1F"}
                />
              </a>
            </Link>
          )}
          <div className="ml-2">
            <h1 className="text-2xl font-bold">Jilver Pacheco</h1>
            <h2 className="text-sm font-regular">
              Sofware Developer | Electronic Engineer
            </h2>
          </div>
        </div>
        {/* <Link href="/contact">
          <a className="px-2 py-1 rounded-md border-2">
            <span>Let&apos;s Contact</span>
          </a>
        </Link> */}
      </div>
      <div className="w-full bg-gray-100 dark:bg-zinc-900 ">
        <div className="max-w-screen-xl h-12 mx-auto flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            {routes.map((item, i) => (
              <Link key={i} href={item.path}>
                <a>
                  <span
                    className={`mx-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-200  ${
                      pathname.includes(item.path)
                        ? "dark:text-stone-100 font-bold"
                        : "font-medium"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </Link>
            ))}
            {session && (
              <Link href="/guestbook">
                <span
                  className={`mx-2 text-sm cursor-pointer text-zinc-600 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-200  ${
                    pathname.includes("/guestbook")
                      ? "dark:text-stone-100 font-bold"
                      : "font-medium"
                  }`}
                >
                  Guestbook
                </span>
              </Link>
            )}
            {renderTheme()}
          </div>
          <div className="flex flex-row items-center justify-center">
            {/* {networks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex flex-row items-center justify-center ml-2"
              >
                <span
                  className="h-7 w-7 flex items-center justify-center rounded-md text-sm"
                  style={{ background: item.bgColor, color: item.color }}
                >
                  {item.icon}
                </span>
              </a>
            ))} */}
            {/* {session ? (
              <button onClick={() => signOut()}>Sign out</button>
            ) : (
              <button onClick={() => signIn()}>Sign in</button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
