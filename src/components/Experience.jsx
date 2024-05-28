// This component displays a timeline of the user's professional experiences. 
// It uses Framer Motion for animations and a dedicated timeline component.
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// Imports the necessary components for creating a vertical timeline from the 'react-vertical-timeline-component' library. 

import { motion } from 'framer-motion';
// Imports the 'motion' function from the 'framer-motion' library, which is used to add animation capabilities to React components.

import 'react-vertical-timeline-component/style.min.css';
// Imports the CSS file for the vertical timeline component, ensuring that the timeline elements are styled correctly.

import { styles } from '../styles';
// Imports a 'styles' object from a file named 'styles.js' located in the parent directory. This object likely contains CSS classes and styles used throughout the project.

import { experiences } from '../constants';
// Imports an object named 'experiences' from a file named 'constants.js' located in the parent directory. This object likely contains data related to the user's professional experiences.

import { SectionWrapper } from '../hoc';
// Imports a component named 'SectionWrapper' from a file named 'hoc.js' located in the parent directory. This component is likely a higher-order component (HOC) that provides a consistent layout and structure for sections within the website.

import { textVariant } from '../utils/motion';
// Imports a function named 'textVariant' from a file named 'motion.js' located in a subdirectory named 'utils'. This function likely defines animation variants for text elements.

import { lightingContext } from 'three/examples/jsm/nodes/Nodes.js';


const ExperienceCard = ({ experience }) => (
  // This is a single card in the timeline, representing one of the user's work experiences. 
  <VerticalTimelineElement
    // Style for the content area of the card (background color, text color).
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    // Style for the arrow pointing to the content (right border color).
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    // Date displayed on the card.
    date={experience.date}
    // Style for the icon background.
    iconStyle={{ background: experience.iconBg }}
    // The icon itself, displayed on the left of the card.
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon} // Source of the icon image
          alt={experience.company_name} // Alternative text for the icon (for screen readers)
          className="w-[60%] h-[60%] object-contain" // Style for the icon image (size and how it fits inside its container)
        />
      </div>
    }
  >

    <div>
      {/* Title of the experience, with a gradient background and hover effect. */}
      <h3 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 hover:shadow-lg transition-all duration-300">
        {experience.title}
      </h3>

      {/* Company name, displayed with a subtle gray color and stroke effect. */}
      <p className="text-secondary text-[16px] font-semibold inline-block" style={{ margin: 0 }}>
        <span className="text-gray-400 text-stroke-2 text-transparent">{experience.company_name}</span>
      </p>

    </div>

    {/* List of key points from the experience. */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={'experience-point-${index}'} // Unique key for each list item
          className="text-white-100 text-[14px] pl-1 tracking-wider" // Style for the list items
        >
          {point} // Display the key point text
        </li>))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  // Returns the JSX code for the component.
  return (
    <>
      {/* This is a motion.div element, which is a div with animation capabilities provided by Framer Motion. 
         It contains the title and subtitle of the section. */}
      <motion.div variants={textVariant()}>
        {/* This is a paragraph element that displays the subtitle of the Experience section. 
            It has a subtle underline effect that appears on hover. */}
        <p className={`${styles.sectionSubText} relative cursor-pointer group inline-block`}>What I've Achieved So Far
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-300"></span>
        </p>

        {/* This is a motion component from the Framer Motion library that creates an animated heading for the Experience section.
            It animates the heading from its initial state (slightly to the left and hidden) to its final state (visible and at its original position). */}
        <motion.h2
          initial={{ x: -50, y: 0, opacity: 0 }} // Initial state: slightly to the left, hidden, and at its original position.
          animate={{ x: 0, y: 0, opacity: 1 }} // Final state: visible, at its original position, and fully visible.
          transition={{ duration: 0.4 }} // The animation transition duration (0.4 seconds).
          className={`${styles.sectionHeadText} font-bold text-5xl gradient-text`} // Styling classes for the heading.
        >
          My Professional Journey: From Passion to Proficiency.
        </motion.h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        {/* This is a container that holds the timeline and centers it on the page. */}

        <VerticalTimeline>
          {/* This loop iterates over the user's work experiences, stored in the 'experiences' array. */}

          {experiences.map((experience, index) => (
            // For each experience, it renders an 'ExperienceCard' component, which is responsible for displaying the details of each work experience.
            // Each card gets a unique 'key' attribute for React to identify it properly.
            <ExperienceCard key={index} experience={experience} />
          ))}

        </VerticalTimeline>

      </div>
    </>
  )
}

// This line exports the Experience component and wraps it with the SectionWrapper component, which is responsible for providing a consistent layout for each section.
export default SectionWrapper(Experience, "work")