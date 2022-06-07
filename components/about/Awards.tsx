import { motion } from "framer-motion";

import AWARDS from "../../data/awards.json";
import { variants } from "../../helpers/variants";

const Awards = () => {
  return (
    <div className="w-full pt-16 ml-3">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h2 className="font-bold text-lg mb-2 mt-2">2020</h2>
        <div>
          {AWARDS.filter((el) => el.date === "2020").map((item, index) => (
            <motion.div
              key={index}
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-base font-semibold">{item.award}</h3>
              <span className="text-sm font-normal">{item.location}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h2 className="font-bold text-lg mb-2 mt-2">2019</h2>
        <div>
          {AWARDS.filter((el) => el.date === "2019").map((item, index) => (
            <motion.div
              key={index}
              className="mb-2 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-base font-semibold">{item.award}</h3>
              <span className="text-sm font-normal">{item.location}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Awards;
