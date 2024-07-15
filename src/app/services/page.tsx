"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We offer comprehensive services in web development, specializing in designing and developing modern, responsive websites that exceed client expectations. Our expertise includes integrating advanced and custom features seamlessly into the user interface. Additionally, we excel in converting Figma designs into high-quality HTML and CSS code, ensuring pixel-perfect rendering across various browsers and devices.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "We offer expert services in mobile application development, delivering native and cross-platform solutions tailored to your business needs. From conceptualization to deployment, we ensure your app meets industry standards and user expectations. We handle everything from initial development to publishing on major platforms like the Google Play Store, App Store, and AppGallery, maximizing your app's reach and impact.",
    href: "",
  },
  {
    num: "03",
    title: "Deployment on VPS Linux",
    description:
      "We offer comprehensive deployment services for Linux VPS servers. This includes configuring and managing distributions such as Ubuntu, CentOS, and Debian. Our services also extend to installing and optimizing web servers like Nginx and Apache, crucial for securely hosting robust applications. Additionally, we integrate Let's Encrypt SSL certificates to ensure your websites are protected with HTTPS encryption, enhancing user trust and data security. Our focus on deployment and management ensures high availability and performance for your web applications, supported by meticulous backup strategies and robust security measures to safeguard your data.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center
                        gap-6 group
                        "
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                                group-hover:text-outline-hover transition-all duration-500
                                "
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"></BsArrowDownRight>
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500
                            "
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
