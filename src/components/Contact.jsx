import { useState, useRef } from 'react'; // Imports two React hooks: `useState` for managing component state and `useRef` for accessing DOM elements directly.
import { motion } from 'framer-motion'; // Imports the `motion` library for adding animation to React components.
import emailjs from '@emailjs/browser'; // Imports the `emailjs` library for sending emails using a third-party service.
import { styles } from '../styles'; // Imports styling rules from a separate file.
import { SectionWrapper } from '../hoc'; // Imports a higher-order component (HOC) for wrapping the `Contact` component.
import { slideIn } from '../utils/motion'; // Imports an animation function from a utility file.
import { EarthCanvas } from "./canvas";

const Contact = () => {
  // Creates a ref to access the form element directly.
  const formRef = useRef();

  // Initializes state variables using `useState`:
  // - `form`: Stores the form data (name, email, message).
  // - `loading`: Tracks whether the email is being sent.
  // - `submitted`: Indicates whether the email has been successfully sent.
  // - `error`: Stores any error messages encountered during submission.
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Function to handle changes to the form input fields.
  const handleChange = (e) => {
    // Updates the `form` state with the new input value.
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Asynchronous function to handle form submission.
  const handleSubmit = async (e) => {
    // Prevents default form submission behavior.
    e.preventDefault();

    // Checks if all required fields are filled.
    if (!form.name || !form.email || !form.message) {
      // Sets an error message if any field is empty.
      setError('Please fill out all fields.');
      return; // Stops further execution if there's an error.
    }

    // Sets the loading state to `true`, indicating the email is being sent.
    setLoading(true);

    try {
      // Sends the email using the `emailjs.send` function.
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');

      // Updates the state to reflect successful submission.
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' }); // Clears the form fields.
      setError(''); // Clears any previous error message.
    } catch (error) {
      // Handles any errors during email sending.
      setError('An error occurred. Please try again later.');
    } finally {
      // Sets the loading state to `false` regardless of success or failure.
      setLoading(false);
    }
  };

  // JSX code for rendering the Contact component:
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Animated container for the contact form using `motion.div`. */}
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)} // Applies the `slideIn` animation to the container.
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* Section subtext with a hover effect. */}
        <p className={`${styles.sectionSubText} cursor-pointer group inline-block relative z-10`}>
          Get in touch
          {/* Gradient underline that appears on hover. */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-secondary to-tertiary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-300"></span>
        </p>

        {/* Animated heading using `motion.h2`. */}
        <motion.h2
          initial={{ x: -50, y: 0, opacity: 0 }} // Initial position and opacity for the animation.
          animate={{ x: 0, y: 0, opacity: 1 }} // Target position and opacity for the animation.
          transition={{ duration: 0.4 }} // Duration of the animation.
          className={`${styles.sectionHeadText} font-bold text-5xl gradient-text`}
        >
          Contact.
        </motion.h2>

        {/* Conditional rendering based on whether the email has been submitted. */}
        {submitted ? (
          <p className="text-green-500">Message sent successfully!</p> // Success message.
        ) : (
          // Form component if the email hasn't been sent yet.
          <form
            ref={formRef} // Refers to the form element for direct access.
            onSubmit={handleSubmit} // Calls the `handleSubmit` function on submission.
            className="mt-12 flex flex-col gap-8"
          >
            {/* Displays an error message if there's an error. */}
            {error && <p className="text-red-500">{error}</p>}
            {/* Form label and input field for the name. */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name} // Value of the input field is bound to the state.
                onChange={handleChange} // Updates the state on input change.
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Similar form label and input fields for email and message. */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Submit button with loading state handling. */}
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              disabled={loading} // Disables the button while loading.
            >
              {/* Shows "Sending..." while loading, otherwise "Send"*/}
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Animation variants for sliding in from the right with a tween effect and duration of 0.2 seconds
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' // CSS classes defining the dimensions of the div based on screen size breakpoints
      >
        <EarthCanvas /> {/* Renders the EarthCanvas component inside the motion.div */}
      </motion.div>

    </div>
  );
};

// Exports the `Contact` component with the `SectionWrapper` HOC.
export default SectionWrapper(Contact, 'contact');