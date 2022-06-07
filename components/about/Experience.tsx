import { motion } from "framer-motion";

import EXPERIENCE from "../../data/experience.json";
import { variants } from "../../helpers/variants";

const Experience = () => {
  return (
    <div className="w-full pt-16 ml-3">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="flex flex-col align-start justify-center">
              <h3 className="text-lg font-semibold">
                {item.role} |&nbsp;
                <a href={item.url} target="_blank" rel="noreferrer">
                  @{item.company}
                </a>
              </h3>
              <span className="text-sm font-normal">{item.date}</span>
              <div>
                {item.activities.map((item, i) => (
                  <p key={i} className="text-base">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
