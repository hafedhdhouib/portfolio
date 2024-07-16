"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Full stack",
    title: "Project 1",
    description:
      "Care-up is an online appointment platform that connects patients in need of home care with healthcare professionals.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Angular" },
      { name: "SpringBoot" },
    ],
    image: "/assets/work/careup.png",
    live: "https://www.careup.tn",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack FreeLance",
    title: "Project 2",
    description:
      "Developed and maintained the Association Innocence website, ensuring a user-friendly and responsive design.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "NuxtJS" },
      { name: "Firebase" },
    ],
    image: "/assets/work/takwini-yahmini.png",
    live: "https://takwini-yahmini.com/",
    github: "",
  },
  {
    num: "03",
    category: "WordPress Plugin",
    title: "Accounting Plugin",
    description:
      "Developed a WordPress accounting plugin to manage and track financial transactions.",
    stack: [{ name: "PHP" }, { name: "WordPress" }, { name: "MySQL" }],
    live: "",
    github: "",
    image: "/assets/work/plugin-wordpress.png",
  },
  {
    num: "04",
    category: "WordPress Plugin",
    title: "WhatsApp Messaging Plugin",
    description:
      "Developed a plugin for sending WhatsApp messages to clients inactive for over 60 days.",
    stack: [{ name: "PHP" }, { name: "WordPress" }, { name: "WhatsApp API" }],
    live: "",
    github: "",
    image: "/assets/work/plugin-wordpress.png",
  },
  {
    num: "05",
    category: "WordPress Plugin",
    title: "Email Export Plugin",
    description:
      "Developed a plugin to export email addresses from the website to a CSV file.",
    stack: [{ name: "PHP" }, { name: "WordPress" }, { name: "MySQL" }],
    live: "",
    github: "",
    image: "/assets/work/plugin-wordpress.png",
  },
  {
    num: "06",
    category: "Mailing System",
    title: "Mailing Website",
    description:
      "Developed a mailing system website using Next.js and Prisma to manage, send newsletters, and list emails imported from CSV files.",
    stack: [{ name: "Next.js" }, { name: "Prisma" }, { name: "Node.js" }],
    live: "",
    github: "",
    image: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
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
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none
          "
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {stack.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border bg-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
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
                    <div
                      className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20
                    "
                    >
                      {/* overly */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
