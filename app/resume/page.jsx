"use client";

import { FaHtml5, FaJava, FaJs, FaReact, FaFigma } from "react-icons/fa6";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiKrita,
  SiMysql,
  SiDotnet,
  SiTypescript,
} from "react-icons/si";

const contacts = {
  title: "My Contacts",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Darwin Donovan Darmadi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 812 8693 3612",
    },
    {
      fieldName: "Email",
      fieldValue: "darwin.donovan552@gmail.com",
    },
    {
      fieldName: "Discord",
      fieldValue: "thatemeraldg",
    },
    {
      fieldName: "LINE",
      fieldValue: "darwin.donovan",
    },
    {
      fieldName: "Location",
      fieldValue: "Tangerang, Indonesia",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bahasa Indonesia, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Organizational Experience",
  description:
    "Here are my experience that I have acquired over the years.\nFor now it is only organizational experience since I am unemployed.",
  items: [
    {
      organization: "BINUS Game Development Club (BGDC)",
      position: "Community Development Veteran Activist",
      duration: "Mar 2023 - Present",
    },
    {
      organization:
        "Himpunan Mahasiswa Teknik Informatika (HIMTI BINUS University)",
      position: "Member",
      duration: "Mar 2023 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "BINUS University",
      type: "University",
      degree: "Computer Science, streaming in Software Engineering",
      duration: "2022 - Present",
    },
    {
      institution: "SMAK PENABUR Kota Tangerang",
      type: "High School",
      degree: "Natural Sciences and Mathematics",
      duration: "2018 - 2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Here are listed the technical skills that I currently possess. I am not proficient in any yet but I am eager to learn.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiDotnet />,
      name: "ASP.NET",
    },
    {
      icon: <SiKrita />,
      name: "Krita",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      name: "More to come",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col justify-start w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contacts">Find Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[80vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/70 whitespace-pre-line mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-center min-h-[50px] lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            {item.organization}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] max-h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex flex-row">
                            <span className="text-accent">
                              {item.duration}
                            </span>
                            <span className="text-accent ml-4 capitalize italic">
                              ({item.type})
                            </span>
                          </div>
                          <h3 className="text-xl min-h-[50px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            {item.institution}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.items.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center gap-4">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                                <div className="mt-4 text-lg group-hover:text-accent transition-all duration-300 capitalize">
                                  {item.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {item.name === "More to come" ? (
                                  <p className="capitalize">Stay tuned!</p>
                                ) : (
                                  <p className="capitalize">{item.name}</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Find Me */}
            <TabsContent
              value="contacts"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{contacts.title}</h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {contacts.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/70">{info.fieldName}</span>
                        <span className="text-white">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
                <Socials
                  containerStyles="flex gap-6 mt-4 justify-center xl:justify-start"
                  iconStyles="w-10 h-10 text-xl flex text-white/80 hover:text-accent hover:transition-all duration-500"
                />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
