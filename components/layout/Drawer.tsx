import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { networks } from "../../helpers/networks";
import ROUTES from "../../helpers/routes";
import PAGE_TRANSITION from "../../utils/PAGE_TRANSITIONS";

interface Props {
  isOpen?: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Drawer = ({ setIsOpen }: Props) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  const { pathname } = useRouter();
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ height: 0, transition: { duration: 1.2 } }}
      transition={{ ...PAGE_TRANSITION }}
      className="fixed w-full h-screen flex flex-col items-center justify-start bg-white dark:bg-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ...PAGE_TRANSITION }}
        className="relative max-w-4xl bg-white dark:bg-zinc-900 w-full grid grid-cols-2 gap-x-4 mt-28"
      >
        <div className="relative principal">
          <span className="absolute top-10 -left-4 -rotate-90 uppercase font-ClashGroteskSemibold tracking-widest text-sm">
            Menu
          </span>
          <div className="flex flex-col items-start justify-center mt-4">
            {ROUTES.map((item, i) => (
              <Link key={i} href={item.path} passHref>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: i * 0.15 },
                  }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="my-5 ml-12 first:mt-2"
                  onMouseEnter={() => cursorEnter()}
                  onMouseLeave={() => cursorLeave()}
                >
                  <span
                    className={`text-5xl tracking-wide text-black hover:text-zinc-700 dark:text-stone-400 dark:hover:text-stone-200  ${
                      pathname === item.path
                        ? "font-ClashGroteskSemibold dark:text-stone-100"
                        : "font-ClashGroteskRegular"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative border-2 flex items-center justify-start">
          <span className="absolute top-0 left-0">Let&apos;s Contact!</span>

          <div className="">
            {networks.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: i * 0.15 },
                }}
                exit={{ opacity: 0 }}
                className="flex flex-row items-center justify-start border-2"
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
              >
                <div
                  className="h-10 w-10 flex items-center justify-center rounded-md"
                  style={{ background: item.bgColor, color: item.color }}
                >
                  <span>{item.icon}</span>
                </div>
                <div>
                  <span className="text-xs">{item.name}</span>
                  <p className="text-base">{item.user}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
