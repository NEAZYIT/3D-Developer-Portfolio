// Importing necessary components and utilities for the Projects section
import { Tilt } from 'react-tilt'; // Tilt component for interactive card tilt effect
import { motion } from 'framer-motion'; // Framer Motion for animations
import { styles } from '../styles'; // Stylesheet for consistent design
import { github } from '../assets'; // GitHub icon for project links
import { SectionWrapper } from '../hoc'; // Higher-order component for section layout
import { projects } from '../constants'; // Constant data for project information
import { fadeIn, textVariant } from '../utils/motion'; // Motion utilities for animations

// This component represents a card displaying project information.
const ProjectCard = ({
  // Properties of the project card such as name, description, tags, etc.
  index, // Index of the project card in the list
  name, // Name of the project
  description, // Description of the project
  tags, // Tags associated with the project
  image, // Image representing the project
  source_code_link, // Link to the source code of the project
}) => {
  return (
    // Applying motion animation to the project card
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt component for interactive card tilt effect */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle
          scale: 1, // Scale factor
          speed: 450, // Tilt speed
        }}
        className='bg-tertiary p-5 rounded-2xl shadow-card sm:w-[360px] w-full' // Styling for the card
      >
        {/* Container for the project image */}
        <div className='relative w-full shadow-card green-pink-gradient rounded-[20px] flex justify-evenly items-center flex-col h-[230px]'>
          {/* Project image */}
          <img
            src={image} // Image source
            alt='project_image' // Alt text for accessibility
            className='w-full h-full object-cover rounded-2xl' // Styling for the image
          />

          {/* Container for the GitHub icon */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* Clickable GitHub icon to view the source code */}
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Opens source code link in a new tab on click
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' // Styling for the icon
            >
              <img
                src={github} // GitHub icon image source
                alt='source code' // Alt text for accessibility
                className='w-1/2 h-1/2 object-contain' // Styling for the icon image
              />
            </div>
          </div>
        </div>

        {/* Container for project name and description */}
        <div className='mt-5'>
          {/* Project name */}
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {/* Project description */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Container for project tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {/* Displaying project tags */}
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag
              className={`text-[14px] ${tag.color}`} // Styling for each tag
            >
              #{tag.name} {/* Displaying tag name */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Animated elements for the Experience section */}
      <motion.div variants={textVariant()}>
        {/* Subtitle for the Experience section */}
        <p className={`${styles.sectionSubText}  cursor-pointer group inline-block relative z-10`}>
          Meine Arbeit {/* Displaying the subtitle */}
          {/* Subtle underline effect on hover */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-secondary to-tertiary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-300"></span>
        </p>

        {/* Animated heading for the Experience section */}
        <motion.h2
          initial={{ x: -50, y: 0, opacity: 0 }} // Initial state: slightly to the left, hidden, and at its original position
          animate={{ x: 0, y: 0, opacity: 1 }} // Final state: visible, at its original position, and fully visible
          transition={{ duration: 0.4 }} // Animation transition duration (0.4 seconds)
          className={`${styles.sectionHeadText} font-bold text-5xl gradient-text`} // Styling classes for the heading
        >
          Entdecke meine Kreationen. {/* Heading text */}
        </motion.h2>

        {/* Introduction paragraph */}
        <div class="flex w-full">
          {/* Animated paragraph for the introduction */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)} // Animation variants for fade-in effect
            class="mt-8 text-indigo-700 dark:text-indigo-300 text-lg md:text-xl font-medium max-w-prose leading-relaxed tracking-wide" // Styling classes for the paragraph
          >
            Welcome to the Projects section of my portfolio, where I bring my ideas
            to life through code. Each project represents a journey of creativity,
            problem-solving, and technical expertise. From web development to backend
            systems, I take pride in building solutions that are not only functional
            but also intuitive and user-friendly.
          </motion.p>
        </div>

        {/* Project Cards section */}
        <div className='mt-20 flex flex-wrap gap-7 justify-center items-center w-full flex-col sm:flex-row'>
          {/* Mapping through the list of projects and rendering ProjectCard component for each */}
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} /> // Passing project data as props to ProjectCard component
          ))}
        </div>

      </motion.div>
    </>
  )
}

// Exporting the Works component wrapped with the SectionWrapper higher-order component (HOC).
// This HOC provides additional functionality or styling to the Works component,
// allowing for modularization and reuse of common functionality across different sections of the portfolio website.
export default SectionWrapper(Works, "");