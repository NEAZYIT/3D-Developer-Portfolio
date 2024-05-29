import React from 'react'; // Importing React library
import { motion } from 'framer-motion'; // Importing motion from Framer Motion for animations
import { testimonials } from '../constants'; // Importing testimonial data
import { SectionWrapper } from '../hoc'; // Importing a higher-order component for section wrapping

// FeedbackCard component to display individual feedback items
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  // Using motion component for animation
  <motion.div
    // Variants for animation states
    variants={{
      hidden: { opacity: 0, y: 50 }, // Hidden state
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Visible state
    }}
    initial="hidden" // Initial animation state
    whileInView="visible" // Animation trigger when in view
    viewport={{ once: true }} // Animation happens only once
    // Styling for feedback card
    className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:shadow-indigo-500/50 overflow-hidden group"
  >
    {/* Glassmorphism Effect */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl"></div>

    {/* Dynamic Quote Mark */}
    <motion.p
      initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
      animate={{ opacity: 1, scale: 1 }} // Animation state
      transition={{ delay: 0.3 }} // Animation delay
      className="text-6xl text-white font-extrabold leading-tight mb-6 relative"
    >
      "
    </motion.p>

    <div className="text-white relative z-10">
      <p className="text-lg mb-6">{testimonial}</p>

      {/* Improved Image & Text Alignment */}
      <div className="flex items-center">
        <img
          src={image}
          alt={`Feedback by ${name}`}
          className="w-16 h-16 rounded-full object-cover mr-4 shadow-md" // Refined Image Styling
        />
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-sm text-gray-400">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>

    {/* Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-500 rounded-3xl"></div>
  </motion.div>
);

// Feedbacks component to display all feedback cards
const Feedbacks = () => {
  return (
    // Section container with background and padding
    <section className="relative mt-12 bg-gray-900 py-20 px-8 rounded-3xl overflow-hidden">
      {/* Background Gradient  */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 opacity-50 blur-3xl rounded-3xl -z-10"></div>

      <div className="container mx-auto"> {/* Container for content */}
        <motion.div
          // Variants for animation states
          variants={{
            hidden: { opacity: 0, y: 50 }, // Hidden state
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Visible state
          }}
          initial="hidden" // Initial animation state
          whileInView="visible" // Animation trigger when in view
          viewport={{ once: true }} // Animation happens only once
          className="text-center mb-16" // Centering and adding margin bottom
        >
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            What Our Clients Say
          </h2>
          {/* Subheading */}
          <p className="text-gray-400 text-lg max-w-lg mx-auto relative">
            Discover the transformative experiences of our valued clients.
            {/* Animated Underline */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            ></motion.span>
          </p>
        </motion.div>

        {/* Improved Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout with responsive columns */}
          {/* Mapping through testimonials and rendering FeedbackCard for each */}
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting Feedbacks component with SectionWrapper
export default SectionWrapper(Feedbacks, ""); // Wrapping Feedbacks component with SectionWrapper