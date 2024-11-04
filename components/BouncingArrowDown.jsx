"use client";

import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

const BouncingArrowDown = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }} // Bounce effect, moves up and down
      transition={{
        duration: 1, // Duration of one cycle
        ease: "easeInOut", // Smooth easing
        repeat: Infinity, // Infinite looping
      }}
    >
      <FaArrowDownLong />
    </motion.div>
  );
};

export default BouncingArrowDown;
