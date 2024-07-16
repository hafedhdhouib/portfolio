"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+216) 44 311 470" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hafedhdhouib@gmail.com",
  },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Sfax, Tunisie" },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { firstname, lastname, email, phone, service, message } = formData;

      const templateParams = {
        from_name: `${firstname} ${lastname}`,
        to_name: "Recipient Name",
        reply_to: email,
        phone_number: phone,
        service_type: service,
        message_html: message,
      };

      const response = await emailjs.send(
        "service_uelhh5k", // Replace with your EmailJS service ID
        "template_41553gi", // Replace with your EmailJS template ID
        templateParams,
        "PUNKDxrJnlaW9kngw"
      );

      console.log("Email sent!", response);

      // Reset form data only after successful email submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      toast({
        description: "Your message has been sent.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <>
      <Toaster />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  We are passionate about collaborating with clients to create
                  innovative and effective solutions. Whether you need web
                  development, mobile development, or deployment on VPS Linux,
                  we are here to help. Our team is dedicated to understanding
                  your needs and delivering exceptional results. Let&apos;s
                  start a conversation and explore how we can work together to
                  achieve your goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="webDevelopment">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile_development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="Deployment">
                        Deployment on VPS Linux
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((info, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{info.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{info.title}</p>
                        <h3 className="text-xl">{info.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
