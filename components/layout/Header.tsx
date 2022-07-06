import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "./Logo";
import { useWindow } from "../../hooks/useWindow";

import PAGE_TRANSITION from "../../utils/pageTransitionVariants";
import { Theme } from "./Theme";

const routes = [
  { path: "/about", name: "About" },
  { path: "/resume", name: "Resume" },
  { path: "/blog", name: "Blog" },
  { path: "/portfolio", name: "Portfolio" },
];

const Header = () => {
  const { pathname } = useRouter();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.header
      className={`w-full relative border-2 duration-500 flex items-center flex-col bg-white border-b-2 border-gray-50`}
    >
      <nav
        className={`lg:max-w-screen-xl w-full h-24 flex items-center justify-between mx-auto`}
      >
        {isMounted && (
          <Link href="/">
            <a>
              <Logo
                width="60"
                height="60"
                bgColor={theme === "light" ? "#1F1F1F" : "#F8F8F8"}
                initials={theme === "light" ? "#FFFFFF" : "#1F1F1F"}
              />
            </a>
          </Link>
        )}
        <div
          className="h-7 w-9 flex items-center justify-center hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`before:duration-300 after:duration-300 relative w-full h-1 ${
              !isOpen
                ? "before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:-translate-y-1 after:content[] after:absolute after:right-0 after:w-10/12 after:bg-black after:h-0.5 after:translate-y-1"
                : "before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:-rotate-45 after:content[] after:absolute after:w-full after:bg-black after:h-0.5 after:rotate-45"
            }`}
          />
        </div>
      </nav>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ ...PAGE_TRANSITION }}
            className="h-screen w-full"
          >
            <div
              className={`flex flex-col items-center justify-between duration-200`}
            >
              {routes.map((item, i) => (
                <Link key={i} href={item.path}>
                  <a onClick={() => setIsOpen(false)}>
                    <span
                      className={`mx-3 text-sm text-zinc-600 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-200  ${
                        pathname.includes(item.path)
                          ? "font-medium dark:text-stone-100 "
                          : "font-light"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </Link>
              ))}

              <Theme isMounted={isMounted} setIsMounted={setIsMounted} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
