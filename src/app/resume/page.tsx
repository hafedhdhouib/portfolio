"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaVuejs,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
const about = {
  title: "About me",
  description: `Innovative Full Stack Developer with a strong foundation in web and mobile application development.
Skilled in modern frontend and backend technologies, with a track record of delivering high-quality
solutions in fast-paced environments. Committed to continuous learning and leveraging new
technologies to solve complex problems and enhance user experiences. Seeking opportunities to
contribute technical expertise and collaborative skills to a dynamic development team.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dhouib Hafedh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216 44 311 470)",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "hafedhdhouib@gmail.com",
    },
    {
      fieldName: "Nationalite",
      fieldValue: "Tunisian",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a Full Stack Developer, I developed a WordPress plugin for financial management, automated client engagement with a WhatsApp plugin, and implemented targeted email marketing strategies using technologies like Next.js, Prisma, and PHP. I enhanced backend applications with Spring Boot, integrated Angular for seamless frontend-backend communication, merged and developed mobile apps with Ionic and Flutter, and published them on major app stores. During my internships, I created a B2B and B2C e-commerce platform using Nuxt.js and Node.js, and customized Mantis Bug Tracker with Microsoft Power Platform.",
  items: [
    {
      company: "Sofflex",
      position: "Full stack developer",
      duration: "April 2024 - July 2024",
    },
    {
      company: "CareUp",
      position: "Full stack developer",
      duration: "April 2023 - January 2024",
    },
    {
      company: "Campour",
      position: "Full stack developer",
      duration: "February 2021 - June 2021",
    },
    {
      company: "Proged solution",
      position: "Full stack developer",
      duration: "Augest 2020 - September 2020",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My educations",
  description: "",
  items: [
    {
      institution: "International Institute of Technology",
      degree: "Engineering Degree",
      duration: "September 2023 - Present",
    },
    {
      institution:
        "Higher Institute of Computer Science and Multimedia of Sfax",
      degree: "License fondamentale",
      duration: "September 2017 - June 2021",
    },
  ],
};
const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <FaVuejs />,
      name: "VueJS",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "NuxtJS",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaBootstrap />,
      name: "FaBootstrap",
    },
  ],
};
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
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:my-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1
                            "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:my-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1
                            "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-sm text-white/60">
                              {item.degree}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:my-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-full bg-[#232329] rounded-xl flex justify-center
                            group
                            "
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
