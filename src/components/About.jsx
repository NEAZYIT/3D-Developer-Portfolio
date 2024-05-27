// Importing necessary tools (like ingredients for a recipe)
import React from 'react';
// React: The main library for building user interfaces (UI). Think of it as the foundation of our website structure.
import { Tilt } from 'react-tilt';
// React Tilt:  A tool that adds a cool 3D tilt effect to elements when you hover over them with your mouse.
import { motion } from "framer-motion";
// Framer Motion: Adds smooth animations, making the website feel more dynamic and engaging.
import { styles } from "../styles";
// styles: Imports our custom-designed styles to make the website look unique and visually appealing.
import { services } from "../constants";
// services: A list of services that we offer, which will be displayed on the page.
import { fadeIn, textVariant } from "../utils/motion";
// fadeIn, textVariant: Pre-made animation blueprints from our "utils/motion" toolbox.

/**
 * Imagine this component as a digital photo frame to showcase each of our services.
 * 
 * @param {number} index - This gives each service frame a unique number so we can organize them.
 * @param {string} title - The name of the service displayed on the frame (e.g., "Web Design").
 * @param {string} icon - The visual representation of the service (like a logo).
 * @returns {JSX.Element}  - The complete, ready-to-display service frame.
 */
const ServiceCard = ({ index, title, icon }) => {
  return (
    // The outer frame that creates the tilt effect
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // This applies the smooth fade-in animation when the frame appears on the screen 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // General styling for the frame -  colors, borders, shadows, etc.
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

        <div
          // Fine-tuning the tilt effect (how much it tilts, how fast)
          option={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          // More styling for the content area inside the frame 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* Displaying the service icon  */}
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          {/* Displaying the service title below the icon */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

        </div>

      </motion.div>
    </Tilt>
  );
}

/**
 * This is the main "About" section of the page, like a big container.
 * It introduces who we are and what we do.
 * 
 * @returns {JSX.Element} -  The complete "About" section, ready to be displayed on the page.
 */
const About = () => {
  return (
    <>
      {/*  "Introduction" heading with a cool animation effect */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* A paragraph introducing us in more detail, also animated for a better visual impact */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        // Styling for the paragraph container - background, borders, shadows, etc.
        className="mt-4 text-secondary text-[17px] max-w-3xl justify-center flex leading-[30px] overflow-x-auto"
        style={{
          WebkitBoxReflect: "bottom left, right, top, 2px -2px #dfd9ff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          backgroundColor: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* This is the actual text content of the introduction. You can change this! */}
        I'm passionate about the intricate world of networking and the dynamic realm of DevOps.
        As a junior web developer with a keen interest in networking and systems administration,
        I'm constantly honing my skills in configuring and optimizing network infrastructures.
        Additionally, my expertise extends to the realm of DevOps,
        where I excel in automating deployment processes, managing server configurations,
        and implementing continuous integration and delivery pipelines.
        🌐 While I possess proficiency in various web development technologies,
        it's the fusion of networking and DevOps that truly ignites my enthusiasm.
        Whether it's troubleshooting network issues, architecting scalable infrastructure,
        or orchestrating containerized environments, I find immense fulfillment in leveraging technology to drive efficiency and innovation.
        With a relentless drive to delve deeper into the complexities of networking and DevOps,
        I aspire to contribute to transformative projects that harness the power of interconnected systems and streamlined workflows.
        🔧✨ Let's connect and build something amazing together! 🚀💻
      </motion.p>

      {/* A container that holds all the service frames  */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* 
        This goes through each service in our list and creates a ServiceCard for it.
        It's like arranging the photo frames neatly on a table.
        */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

// This line exports the About component so it can be used in other parts of the website.
export default About; 