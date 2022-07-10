import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { AppContext } from "../../context/AppContext";

import { Logo } from "./Logo";
import { Theme } from "./Theme";
import Drawer from "./Drawer";
import ResponsiveBtn from "./ResponsiveBtn";

const Header = () => {
  const { theme } = useTheme();
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.header
      className={`z-50 cursor-none w-full flex items-center flex-col bg-white dark:bg-zinc-900
      ${isOpen ? "fixed  top-0 left-0" : "relative"}`}
    >
      <nav className="max-w-screen-xl mx-auto xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full h-24 flex items-center justify-between z-50">
        {isMounted && (
          <Link href="/" passHref>
            <a
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => cursorEnter()}
              onMouseLeave={() => cursorLeave()}
            >
              <Logo
                width="60"
                height="60"
                bgColor={theme === "light" ? "#1F1F1F" : "#F8F8F8"}
                initials={theme === "light" ? "#FFFFFF" : "#1F1F1F"}
              />
            </a>
          </Link>
        )}
        <div className="flex items-center justify-center">
          <Theme isMounted={isMounted} setIsMounted={setIsMounted} />
          <ResponsiveBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
