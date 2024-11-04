"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[325px] h-[325px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/myphoto.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>

        <motion.svg
          className="w-[330px] h-[330px] xl:w-[460px] xl:h-[460px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "0 0 24 10" }}
            animate={{
              strokeDasharray: ["15 125 25 25", "15 25 100 75", "15 250 25 25"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
