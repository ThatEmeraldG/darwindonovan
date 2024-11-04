"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderBtns from "@/components/SliderBtns";

const projects = [
  {
    id: "01",
    category: "frontend",
    title: "ERamen",
    description:
      "Human Computer Interaction course project assignment.\nA Ramen restaurant website mockup thats supposed to be responsive for both desktop and mobile screens.\nAll logo and web design were made by me.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/projects/eramen1.png",
    live: "https://e-ramen-ten.vercel.app/",
    github: "https://github.com/ThatEmeraldG/ERamen",
  },
  {
    id: "02",
    category: "game dev",
    title: "Multi Spells",
    description:
      "First Collaborative Game Dev Project, a short action platformer card game made within Talent Group Batch 6 BGDC.\nCollect cards, eliminate enemies, and defeat the boss!\nThis project was built with Unity and C#.",
    stack: [{ name: "Unity" }, { name: "C#" }, { name: "Aseprite" }],
    image: "/assets/projects/multispells.gif",
    live: "https://bgdc.itch.io/multispells",
    github: "https://github.com/Fueeewry/TALENT-GROUP",
  },
  {
    id: "03",
    category: "game dev",
    title: "Into the Function",
    description:
      "BGDC Pengabdian kepada Masyarakat (PKM) collaborative game project.\nRogue-like card game that immerses players in the world of programming. Strategize with algorithm-themed cards to overcome challenging enemies and defeat the boss!\nHeavily inspired by Slay the Spire",
    stack: [{ name: "Unity" }, { name: "C#" }],
    image: "/assets/projects/Into The Function.gif",
    live: "https://bgdc.itch.io/into-the-function",
    github: "https://github.com/Fueeewry/PKM",
  },
  {
    id: "04",
    category: "frontend",
    title: "TrackHaven",
    description:
      "Collaborative frontend project for a home/property management website.\nThis project was part of my Human Computer Interface course final assignment and includes some basic validation in JavaScript.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/projects/TrackHaven1.png",
    live: "https://track-haven.vercel.app/",
    github: "https://github.com/ThatEmeraldG/TrackHaven",
  },
  {
    id: "05",
    category: "fullstack",
    title: "MakeMeUpzz",
    description:
      "Collaborative fullstack logic for a makeup management website using ASP.NET, completed with Cookie, Session, and SAP Crystal Report implementation.\nThis project utilizes the MVC architectural design pattern and was built using C#.",
    stack: [{ name: "ASP.NET" }, { name: "C#" }],
    image: "/assets/projects/MakeMeUpzz.png",
    live: "",
    github: "https://github.com/ThatEmeraldG/MakeMeUpzz",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Num */}
              <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
                {project.id}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60 whitespace-pre-line">
                {project.description}
              </p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remmove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.live ? "" : "hidden"}`}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.github ? "" : "hidden"}`}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[450px] relative group flex justify-center items-center bg-transparent">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-8"></div>
                      {/* Image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain rounded-lg group-hover:scale-110 transition-all duration-500"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slide Button */}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full hover:text-primary transition-all"
                iconStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
