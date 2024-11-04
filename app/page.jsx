"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-24 xl:pb-12">
          {/* text */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 1.5,
              duration: 3,
            }}
            className="flex flex-col xl:items-start items-center text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-xl mb-4">Aspiring Software Developer</span>
            <h1 className="h1 mb-4 text-accent">Darwin Donovan Darmadi</h1>
            <p className="max-w-[800px] mb-8 text-white/80">
              Undergraduate 3rd year Computer Science student at BINUS
              University, Indonesia.
            </p>
            {/* btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* CV */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() =>
                  window.open("/CV_DarwinDonovanDarmadi.pdf", "_blank")
                }
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {/* View Projects */}
              <Button
                variant="outlineWhite"
                size="lg"
                className="uppercase flex justify-center items-center gap-2"
                onClick={() => window.open("/projects", "_self")}
              >
                <span>View Projects</span>
                <BsArrowUpRight className="text-xl" />
              </Button>
            </div>
          </motion.div>
          {/* logo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 1, ease: "easeInOut" },
              }}
              className="w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] ml-auto"
              whileHover={{ scale: 1.1, duration: 0.2, rotate: 180 }}
              whileTap={{ scale: 0.8, duration: 0.2, rotate: -90 }}
            >
              <Image
                src="/assets/emerald-pfp.png"
                priority
                quality={100}
                fill
                alt="Emerald"
                className="object-cover rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
