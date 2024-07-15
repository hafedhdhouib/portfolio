"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

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
        "service_uelhh5k", // Remplacez par votre ID de service EmailJS
        "template_41553gi", // Remplacez par votre ID de template EmailJS
        templateParams,
        "PUNKDxrJnlaW9kngw"
      );

      console.log("Email sent!", response);
      // Ajoutez ici la logique pour gérer le succès de l'envoi du message
    } catch (error) {
      console.error("Error sending email:", error);
      // Ajoutez ici la logique pour gérer les erreurs lors de l'envoi du message
    }
  };

  return (
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
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                necessitatibus quidem, ut deserunt voluptates molestias iusto
                assumenda neque, cum pariatur dolorem non enim, eligendi
                praesentium quas tempora unde quibusdam perferendis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  placeholder="Firstname"
                  defaultValue={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  placeholder="Lastname"
                  defaultValue={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  defaultValue={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="phone number"
                  defaultValue={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                defaultValue={formData.service}
                onValueChange={(e) => (formData.service = e)}
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
                    <SelectItem
                      value="Mobile_development
"
                    >
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
  );
};

export default Contact;
