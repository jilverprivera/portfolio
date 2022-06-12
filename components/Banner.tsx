import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link as NavLink } from "react-scroll";

import { networks } from "../helpers/networks";
const Banner = () => {
  return (
    <div className="principal relative lg:max-w-6xl flex flex-col items-start justify-center mx-auto">
      <div className="w-full flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between mx-auto">
        <div className="flex flex-col lg:items-start md:items-center justify-start md:justify-center">
          <h1 className="font-bold mb-5 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center md:text-center lg:text-left md:mt-8">
            I&apos;m Jilver Pacheco
          </h1>
          <h2 className="flex sm:text-4xl md:text-5xl lg:text-6xl sm:text-center md:text-center lg:text-left font-bold mb-5 text-violet-800 dark:text-yellow-500">
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
          <div className="w-5/6">
            <p className="text-base font-medium text-gray-500 dark:text-white sm:text-center md:text-center lg:text-left">
              Welcome to my little space on the <strong>WWW</strong>, here I
              show my projects and talk about things I like.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-full mr-3">
          <Image
            src={`/image.webp`}
            alt="Jilver Pacheco"
            width={282}
            height={362}
          />
        </div>
      </div>
      <div className="flex mt-3 mb-16">
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
              <p className="text-gray-400 text-sm">{item.name}</p>
              <p className="text-black dark:text-white text-base">
                {item.user}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute bottom-5 left-2/4 flex flex-col items-center justify-center">
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
