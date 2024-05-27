import { motion } from 'framer-motion'; // Importing for smooth animations
import { styles } from '../styles'; // Importing our website's custom styles
import { staggerContainer } from '../utils/motion'; // Importing a pre-made animation blueprint 

/**
 * This is a special function called a Higher-Order Component (HOC). 
 * Think of it like a gift-wrapping station for sections of our website.
 * 
 * It takes a plain website section (a component) and adds cool features:
 * 1. Smooth Animations: It makes the section appear on the page with a nice animation.
 * 2. Unique ID:  It gives the section a special ID so we can easily find it on the page.
 *
 * @param {JSX.Element} Component - The website section that we want to enhance.
 * @param {string} idName - The unique ID we want to give to this section.
 * @returns {JSX.Element} -  The beautifully wrapped section, ready to be displayed!
 */
const SectionWrapper = (Component, idName) => {
    return function HOC() {
        return (
            // `motion.section` is our enhanced section, thanks to Framer Motion!
            <motion.section
                variants={staggerContainer()} // Applying the animation blueprint
                initial="hidden" // It starts hidden, so it can smoothly appear
                whileInView="show" //  As soon as it's in view, it animates in
                viewport={{ once: true, amount: 0.25 }}  //Fine-tuning when the animation plays
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            // Adding general styling classes 
            >
                {/* This creates a hidden anchor point with the given ID */}
                <span className="hash-span" id={idName}>

                </span>

                {/* Here's the original content of the section */}
                <Component />
            </motion.section>
        );
    };
};

//  Making the SectionWrapper available to use in other parts of the website
export default SectionWrapper; 