"use client";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Resume from "../resume/page";
import BouncingArrowDown from "@/components/BouncingArrowDown";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-24">
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
            <h1 className="h1 mb-2">
              Hi, I&apos;m <span className="text-accent">Darwin</span>
            </h1>
            <span className="text-xl mb-6">
              AKA <span className="text-accent">ThatEmeraldG</span> on the
              internet
            </span>
            <p className="max-w-[620px] mb-8 text-white/80">
              3rd Year Computer Science student at BINUS University.
              <br />
              I can classify myself as an adaptable person, eager to learn new
              things and overcome challenges along the way.
              <br />
              I am passionate about art, software development, and design.
              <br />
              <br />
              My skills are currently limited for mostly front-end tasks, but I
              am open to opportunities where I can grow as a full-stack
              application developer.
            </p>
            {/* Btn and Socials */}
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
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-2 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* Arrow down */}
        <div className="text-2xl mt-4 flex justify-center xl:absolute xl:left-[50%] xl:-translate-x-[50%] xl:bottom-8">
          <BouncingArrowDown />
        </div>

        {/* Skills */}
        <div className="flex flex-col pt-12">
          <div className="flex justify-center xl:mb-12">
            <h1 className="h1 text-accent uppercase">-- About Me --</h1>
          </div>
          <Resume />
        </div>
      </div>
    </section>
  );
};

export default About;
