import { motion } from "framer-motion";
import Link from "next/link";

import EDUCATION from "../../data/education.json";
import { variants } from "../../helpers/variants";

const Education = () => {
  return (
    <div className="w-full pt-16 ml-3">
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
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="text-sm font-normal">
                {item.academy} | {item.location}
              </span>
              {/* <span className="text-sm font-normal">{item.location}</span> */}
              <span className="text-sm font-normal">{item.date}</span>
            </div>
            <Link href={item.url}>
              <a className="h-full p-2.5 bg-black text-white text-sm rounded">
                View Certificate
              </a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
