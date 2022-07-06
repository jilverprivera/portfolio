import { motion } from "framer-motion";
import { useWindow } from "../../hooks/useWindow";

const transition = { duration: 0.8, ease: [0.6, -0.4, 0.1, 0.9] };

export const Panels = () => {
  const { windowSize } = useWindow();
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, windowSize.height, 0],
          bottom: [0, 0, windowSize.height],
        }}
        exit={{ height: [0, windowSize.height, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="absolute left-0 w-2/4 h-screen z-50 bg-pink-300"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, windowSize.height, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, windowSize.height, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="absolute right-0 w-2/4 h-screen z-50 bg-blue-300"
      ></motion.div>
    </>
  );
};
