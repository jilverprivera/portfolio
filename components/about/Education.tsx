import { motion } from "framer-motion";
import Link from "next/link";

import EDUCATION from "../../data/education.json";
import { variants } from "../../helpers/variants";

const Education = () => {
  return (
    <div className="self-container mt-12 ml-3">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {EDUCATION.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="flex flex-col align-start justify-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-sm font-normal">
                {item.academy} | {item.location}
              </span>
              <span className="text-sm font-normal">{item.date}</span>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-2.5 bg-violet-800 dark:bg-yellow-500 dark:text-black dark:font-semibold text-white text-sm rounded"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
