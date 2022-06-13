import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link as NavLink } from "react-scroll";

import { networks } from "../helpers/networks";

const Banner = () => {
  return (
    <div className="principal relative lg:max-w-6xl flex flex-col xs:items-center md:items-center lg:items-start justify-center mx-auto">
      <div className="w-full flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between mx-auto">
        <div className="flex flex-col lg:items-start md:items-center justify-start md:justify-center">
          <h1 className="text-black dark:text-white xs:font-semibold md:font-bold lg:font-bold  xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl sm:text-center xs:text-center md:text-center lg:text-left xs:mt-8 md:mt-8 mb-5">
            I&apos;m Jilver Pacheco
          </h1>
          <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xs:text-center sm:text-center md:text-center lg:text-left font-bold mb-5 text-gray-500 dark:text-stone-200">
            <Typewriter
              options={{
                strings: [
                  "Software Developer.",
                  "Electronic Engineer.",
                  "Robotics Enthusiast.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="w-5/6 xs:mx-auto sm:mx-auto lg:mx-0">
            <p className="text-base font-medium text-black dark:text-stone-400 xs:text-center sm:text-center xs:leading-7 md:text-center lg:text-left">
              Welcome to my little space on the <strong>WWW</strong>, here I
              show my projects and talk about things I like.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-full xs:w-6/12 sm:w-4/12 md:w-3/12 lg:w-3/12 border-2 flex items-center justify-center">
          <Image
            src={`/image.webp`}
            alt="Jilver Pacheco"
            width={282}
            height={362}
          />
        </div>
      </div>
      <div className="xs:hidden sm:hidden md:flex lg:flex mt-3 mb-16">
        {networks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="flex mr-6 items-center justify-start"
          >
            <span
              className="h-12 w-12 flex items-center justify-center mr-2 rounded-lg text-2xl"
              style={{ background: item.bgColor, color: item.color }}
            >
              {item.icon}
            </span>
            <div>
              <p className="text-gray-500 dark:text-stone-400 text-sm">
                {item.name}
              </p>
              <p className="text-black dark:text-white text-base">
                {item.user}
              </p>
            </div>
          </a>
        ))}
      </div>

      <button className="xs:flex sm:flex md:hidden lg:hidden border-2 flex items-center justify-center w-36 text-violet-800 dark:text-yellow-500 my-16 rounded-lg py-1.5 px-2 text-lg border-violet-800 dark:border-yellow-500">
        Get my resume
      </button>

      <div className="absolute bottom-5 left-2/4 -translate-x-2/4 xs:hidden sm:hidden md:hidden lg:flex flex-col items-center justify-center">
        <span className="mb-2 text-sm">Scroll Down</span>
        <NavLink
          to="latest-projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="h-10 w-6 border-2 rounded-xl dark:border-white border-black flex items-start justify-center cursor-pointer"
        >
          <motion.div
            className="h-2 w-2 bg-black dark:bg-white mt-2 rounded-full"
            initial={{ y: 0 }}
            animate={{
              y: 10,
              transition: {
                duration: 0.5,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
