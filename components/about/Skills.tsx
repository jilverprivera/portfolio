import { motion } from "framer-motion";

import SKILLS from "../../data/skills.json";
import { variants } from "../../helpers/variants";

const Skills = () => {
  return (
    <div className="w-full pt-16 ml-3">
      {SKILLS.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center"
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {item.items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center polygon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <span className="polygon-wrapper text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
