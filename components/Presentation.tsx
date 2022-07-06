import { motion } from "framer-motion";
import { networks } from "../helpers/networks";

const Presentation = () => {
  return (
    <div className=" w-4/6 flex flex-col lg:items-start md:items-center justify-start md:justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" w-4/5 text-black dark:text-white font-medium  xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl sm:text-center xs:text-center md:text-center lg:text-left xs:mt-8 md:mt-8 mb-5"
      >
        Hi, I&apos;m Jilver Pacheco and I develop things for the Internet.
      </motion.h1>
      <p className="font-extralight leading-7 w-3/5">
        I started in this wonderful world in 2020 when I built my first desktop
        app to store the documents of different academic courses of
        <strong> Electronic Engineering</strong>. Now, as a
        <strong> Software Developer </strong>my main focus is to build
        <strong> UI/UX</strong>-centric and accessible digital applications.
      </p>

      <div className="xs:hidden lg:flex mt-16 mb-8">
        {networks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex mr-5 items-center justify-start"
          >
            <span
              className="h-10 w-10 flex items-center justify-center mr-2 rounded-lg text-xl"
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
    </div>
  );
};

export default Presentation;
